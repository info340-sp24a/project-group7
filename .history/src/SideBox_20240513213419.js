import React, { useState, useEffect } from 'react';

const SideBox = () => {
  const [note, setNote] = useState('');
  const [image, setImage] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    // Retrieve saved notes from local storage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    setSavedNotes(notes);
  }, []);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { text: note, image };
    const updatedNotes = [...savedNotes, newNote];
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNote('');
    setImage(null);
  };

  const handleDelete = (index) => {
    const updatedNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <aside className="side-box">
      <h2>Dear Diary,</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          id="noteTextArea"
          placeholder="Enter your notes here..."
          value={note}
          onChange={handleNoteChange}
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add Note</button>
      </form>
      <div className="saved-notes">
        {savedNotes.map((note, index) => (
          <div key={index} className="note">
            <p>{note.text}</p>
            {note.image && <img src={note.image} alt="note" />}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBox;
