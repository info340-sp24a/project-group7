import React, { useState, useEffect } from 'react';
import '../SideBox.css';
import '../index.css';



const SideBox = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'body') setBody(value);
    else if (name === 'image') setImage(files[0]);
    else if (name === 'color') setColor(value);
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

  const handleNoteClick = (note) => setSelectedNote(note);

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    if (selectedNote === notes[index]) setSelectedNote(null);
  };

  return (
    <div className="main-content">
      <aside className="side-box">
        <h2>Dear Diary,</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <textarea
            name="body"
            value={body}
            onChange={handleChange}
            placeholder="Enter your notes here..."
            required
          ></textarea>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <input
            type="color"
            name="color"
            value={color}
            onChange={handleChange}
          />
          <button type="submit">Add Note</button>
        </form>
      </aside>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div
            key={index}
            className="note-container"
            style={{ backgroundColor: note.color }}
            onClick={() => handleNoteClick(note)}
          >
            <h3>{note.title}</h3>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteNote(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="note-details">
        {selectedNote ? (
          <div className="selected-note">
            <h3>{selectedNote.title}</h3>
            <p>{selectedNote.body}</p>
            {selectedNote.image && (
              <img
                src={URL.createObjectURL(selectedNote.image)}
                alt="Note"
                className="note-image"
              />
            )}
          </div>
        ) : (
          <div className="select-note-box">
            <p className="select-note">Select a note to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBox;
