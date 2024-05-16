// src/components/DiaryApp.js
import React, { useState, useEffect } from 'react';
import SideBox from './SideBox';
import SquaresContainer from './SquaresContainer';
import './index.css';

const DiaryApp = () => {
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    // Retrieve saved notes from local storage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    setSavedNotes(notes);
  }, []);

  const handleAddNote = (newNote) => {
    const updatedNotes = [...savedNotes, newNote];
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="diary-app">
      <SideBox onAddNote={handleAddNote} />
      <SquaresContainer notes={savedNotes} onDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default DiaryApp;
