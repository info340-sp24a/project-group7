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

  return (
  <div className="side-box-container">
    <aside className="side-box">
      <h2>Dear Diary,</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          required
        />
        <textarea
          id="noteTextArea"
          value={body}
          onChange={handleBodyChange}
          placeholder="Enter your notes here..."
          required
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <button type="submit">Add Note</button>
      </form>
    </aside>
    <div className="notes-container">
      <div className="notes-list">
        {notes.map((note, index) => (
          <div
            key={index}
            className="note-title"
            style={{ backgroundColor: note.color }}
          >
            <h3 onClick={() => handleNoteClick(note)}>{note.title}</h3>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="note-details">
        {selectedNote ? (
          <>
            <h3>{selectedNote.title}</h3>
            <p>{selectedNote.body}</p>
            {selectedNote.image && <img src={selectedNote.image} alt="Note" />}
          </>
        ) : (
          <p>Select a note to view details</p>
        )}
      </div>
    </div>
  </div>
);
