import React, { useState } from 'react';

const SideBox = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

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

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  return (
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
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note-title" onClick={() => handleNoteClick(note)}>
            <h3>{note.title}</h3>
          </div>
        ))}
      </div>
      {selectedNote && (
        <div className="note-details">
          <h3>{selectedNote.title}</h3>
          <p>{selectedNote.body}</p>
          {selectedNote.image && <img src={selectedNote.image} alt="Note" />}
        </div>
      )}
    </aside>
  );
};

export default SideBox;
