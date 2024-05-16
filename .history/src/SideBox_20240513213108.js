import React, { useState } from 'react';

const SideBox = ({ onAddNote }) => {
  const [note, setNote] = useState('');
  const [image, setImage] = useState(null);

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
    onAddNote(newNote);
    setNote('');
    setImage(null);
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
    </aside>
  );
};

export default SideBox;
