import React, { useState, useEffect } from 'react';
import '../SideBox.css';

// Note Form component for adding new notes
const NoteForm = ({ handleSubmit, handleChange, title, body }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="title" value={title} onChange={handleChange} placeholder="Title" required />
    <textarea id="noteTextArea" name="body" value={body} onChange={handleChange} placeholder="Enter your notes here..." required></textarea>
    <input type="file" name="image" accept="image/*" onChange={handleChange} />
    <button type="submit">Add Note</button>
  </form>
);

// Individual Note component
const NoteItem = ({ note, handleNoteClick, handleDeleteNote }) => (
  <div className="note-container" style={{ backgroundColor: note.color }} onClick={() => handleNoteClick(note)}>
    <h3>{note.title}</h3>
    <button className="delete-button" onClick={() => handleDeleteNote(note)}>Delete</button>
  </div>
);

// Note List component to display existing notes
const NoteList = ({ notes, handleNoteClick, handleDeleteNote }) => (
  <div className="notes-list">
    {notes.map((note, index) => (
      <NoteItem key={index} note={note} handleNoteClick={handleNoteClick} handleDeleteNote={handleDeleteNote} />
    ))}
  </div>
);

// Selected Note Details component
const SelectedNoteDetails = ({ selectedNote }) => (
  <div className="selected-note">
    <h3>{selectedNote.title}</h3>
    <p>{selectedNote.body}</p>
    {selectedNote.image && <img src={URL.createObjectURL(selectedNote.image)} alt="Note" className="note-image" />}
  </div>
);

const SideBox = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

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
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'body') setBody(value);
    else if (name === 'image') setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      const newNote = { title, body, image };
      setNotes([...notes, newNote]);
      setTitle('');
      setBody('');
      setImage(null);
    }
  };

  const handleNoteClick = (note) => setSelectedNote(note);

  const handleDeleteNote = (note) => {
    const updatedNotes = notes.filter((n) => n !== note);
    setNotes(updatedNotes);
    if (selectedNote === note) setSelectedNote(null);
  };

  return (
    <div className="side-box-container">
      <aside className="side-box">
        <h2>Dear Diary,</h2>
        <NoteForm handleSubmit={handleSubmit} handleChange={handleChange} title={title} body={body} />
      </aside>
      <NoteList notes={notes} handleNoteClick={handleNoteClick} handleDeleteNote={handleDeleteNote} />
      <div className="note-details">
        {selectedNote ? <SelectedNoteDetails selectedNote={selectedNote} /> : <div className="select-note-box"><p className="select-note">Select a note to view details</p></div>}
      </div>
    </div>
  );
};

export default SideBox;
