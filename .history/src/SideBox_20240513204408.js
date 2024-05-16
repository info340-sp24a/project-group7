import React from 'react';
import './index.css';
import './index.css';


const SideBox = () => {
  return (
    <aside className="side-box">
      <h2>Dear Diary,</h2>
      <form>
        <textarea id="noteTextArea" placeholder="Enter your notes here..."></textarea>
        <input type="file" accept="image/*" />
        <button type="submit">Add Note</button>
      </form>
    </aside>
  );
};

export default SideBox;
