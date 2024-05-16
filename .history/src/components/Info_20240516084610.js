import React from 'react';
import '../I.css';


function PlantInfo() {
  return (
    <section className="plant-info">
      <img src="img/monstera.jpg" alt="Monstera Plant" className="plant-image" />
      <h1>Monstera</h1>
      <h3>Monstera deliciosa</h3>
      <p className="plant-blurb">They are famous for their natural leaf-holes, which has led to their nickname, Swiss Cheese Plant.</p>
    </section>
  );
}

export default PlantInfo;
