// src/components/SquaresContainer.js
import React from 'react';

function SquaresContainer() {
  return (
    <div className="container">
      <div className="recently-added">
        <span>Recently Added</span>
      </div>
      <div className="column">
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
      <div className="column">
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default SquaresContainer;
