import React from 'react';



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
