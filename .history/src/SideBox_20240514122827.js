import React, { useState } from 'react';

const SideBox = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notes, setNotes] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      const newNote = { title, body };
      setNotes([...notes, newNote]);
      setTitle('');
      setBody('');
    }
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
        <input type="file" accept="image/*" />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBox;
