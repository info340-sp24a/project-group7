import React, { useState, useEffect } from 'react';
import './SideBox.css'; // Import the CSS file for styling

const SideBox = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [color, setColor] = useState('#ffffff'); // Default color

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      const newNote = { title, body, image, color };
      setNotes([...notes, newNote]);
      setTitle('');
      setBody('');
      setImage(null);
      setColor('#ffffff');
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    if (selectedNote === notes[index]) {
      setSelectedNote(null);
    }
  };

  
    
  );
};

export default SideBox;
