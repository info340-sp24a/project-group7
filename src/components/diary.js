// sources(https://www.w3schools.com/react/react_usestate.asp)
// https://www.shecodes.io/athena/8476-how-to-prevent-return-until-submit-is-clicked-in-react-js
import React, { useState, useEffect } from 'react';
import '../css/diary.css';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const Diary = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [color, setColor] = useState('#ffffff');
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const db = getDatabase();
  const storage = getStorage();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && body) {
      setLoading(true);
      let imageUrl = '';
      if (image) {
        const imageRef = storageRef(storage, `images/${user.uid}/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const noteRef = push(notesRef);
      const newNote = { title, body, image: imageUrl, color };
      set(noteRef, newNote)
        .then(() => {
          setTitle('');
          setBody('');
          setImage(null);
          setColor('#ffffff');
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error adding note: ', error);
          setLoading(false);
        });
    }
  };

  const handleNoteClick = (noteId) => {
    setSelectedNoteId(prevNoteId => prevNoteId === noteId ? null : noteId);
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
          <button aria-label='add-note' type="submit" disabled={loading}>
            {loading ? 'Adding Note...' : 'Add Note'}
          </button>
        </form>
      </aside>
      <div className="note-details-container">
        <div className="notes-list">
          {notes.map((note, index) => (
            <div key={index} className="note-wrapper">
              <div
                className={`note-container ${selectedNoteId === note.id ? 'open' : ''}`}
                style={{ backgroundColor: note.color }}
                onClick={() => handleNoteClick(note.id)}
              >
                <h3>{note.title}</h3>
                <button
                  className="delete-button"
                  aria-label='delete-note'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteNote(note);
                  }}
                >
                  Delete
                </button>
              </div>
              <div className={`note-details ${selectedNoteId === note.id ? 'open' : ''}`}>
                {selectedNoteId === note.id && (
                  <div className="selected-note">
                    <p>{note.body}</p>
                    {note.image && (
                      <img
                        src={note.image}
                        alt="Note"
                        className="note-image"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diary;
