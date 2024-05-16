import React from 'react';
import '../index.css';

function PlantInfo() {
  return (
    <section className="plant-info">
      <div className="image-container">
        <img src="img/monstera.jpg" alt="Monstera Plant" className="plant-image-small" />
        <div className="arrow left-arrow">&#10094;</div>
        <div className="arrow right-arrow">&#10095;</div>
      </div>
      <h3>Monstera deliciosa</h3>
      <p className="plant-blurb">The Monstera, also known as Monstera deliciosa or the Swiss Cheese Plant, is famous for its unique leaves that look like they're hole-punched, earning it its nickname. These holes aren't just for show; they help the plant in the wild by letting sunlight filter through dense forests. As a houseplant, Monstera is loved for its easy care and striking appearance. It needs bright but indirect light and well-draining soil to thrive. Plus, if you're lucky, it might even produce tasty fruit, though you'll want to wait until it's fully ripe to enjoy it safely. Overall, Monstera brings a touch of the tropics to any indoor space!</p>
    </section>
  );
}

export default PlantInfo;
