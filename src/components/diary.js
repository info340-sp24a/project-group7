// sources(https://www.w3schools.com/react/react_usestate.asp)
// https://www.shecodes.io/athena/8476-how-to-prevent-return-until-submit-is-clicked-in-react-js

import React, { useState, useEffect } from 'react';
import '../css/diary.css';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const Diary = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [color, setColor] = useState('#ffffff');

  const auth = getAuth();
  const user = auth.currentUser;

  const db = getDatabase();
  const notesRef = ref(db, `notes/${user?.uid}`);

  useEffect(() => {
    if (user) {
      onValue(notesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const notesArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setNotes(notesArray);
        } else {
          setNotes([]);
        }
      });
    }
  }, [user, notesRef]);

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
      const noteRef = push(notesRef);
      const newNote = { title, body, image, color };
      set(noteRef, newNote)
        .then(() => {
          setTitle('');
          setBody('');
          setImage(null);
          setColor('#ffffff');
        })
        .catch((error) => console.error('Error adding note: ', error));
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(prevNote => prevNote === note ? null : note);
  };

  const handleDeleteNote = (noteToDelete) => {
    const noteRef = ref(db, `notes/${user.uid}/${noteToDelete.id}`);
    set(noteRef, null)
      .then(() => console.log('Note deleted successfully'))
      .catch((error) => console.error('Error deleting note: ', error));
  };

  const getImagePreview = (image) => {
    return image ? URL.createObjectURL(image) : null;
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
          <label htmlFor="color">Select color:</label>
          <input
            type="color"
            name="color"
            value={color}
            onChange={handleChange}
          />
          <button type="submit">Add Note</button>
        </form>
      </aside>
      <div className="note-details-container">
        <div className="note-details">
          {selectedNote && (
            <div className="selected-note">
              <h3>{selectedNote.title}</h3>
              <p>{selectedNote.body}</p>
              {selectedNote.image && (
                <img
                  src={getImagePreview(selectedNote.image)}
                  alt="Note"
                  className="note-image"
                />
              )}
            </div>
          )}
        </div>
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
                  handleDeleteNote(note);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diary;
