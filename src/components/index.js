import React, { useState } from 'react';
import '../css/main.css'; // Import the CSS file
import '../css/index.css';
import SearchFilter from '../components/SearchFilter.js';

const plantData = [
  {
    name: 'Monstera',
    img: '../img/Rectangle 68.png',
    description: 'They are famous for their natural leaf-holes, which has led to their nickname, Swiss Cheese Plant.'
  },
  {
    name: 'Pothos',
    img: '../img/pothos.jpg',
    description: 'Pothos are beloved for their trailing vines of glossy, heart-shaped leaves and easy care requirements.'
  },
  {
    name: 'Spider Plant',
    img: '../img/spiderplant.jpg',
    description: 'Spider plants are unmistakable with their arching, grassy leaves striped in green and white.'
  },
  {
    name: 'Snake Plant',
    img: '../img/Rectangle 14.png',
    description: 'The upright, sword-like leaves of the snake plant make it an architectural and low-maintenance choice.'
  },
  {
    name: 'Cat Palm',
    img: '../img/Rectangle 69.png',
    description: 'The cat palm is prized for its fluffy, arching fronds of slender green leaves that give it a lush, tropical appearance.'
  },
  {
    name: 'Chinese Evergreen',
    img: '../img/chineseevergreen.jpg',
    description: 'Chinese evergreens have beautiful, oval leaves patterned in shades of green, pink, red, and white depending on the variety.'
  },
  {
    name: 'Dracaena',
    img: '../img/dracaena.jpg',
    description: 'Dracaenas are a diverse group of plants valued for their upright, cane-like stems and colorful sword-shaped leaves.'
  },
  {
    name: 'ZZ Plant',
    img: '../img/zzplant.jpg',
    description: 'The ZZ plant is prized for its thick, waxy stems densely covered in glossy green leaves.'
  }
];

export default function PlantGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlants, setFilteredPlants] = useState(plantData);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = plantData.filter(plant =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  const handleResetClick = () => {
    setFilteredPlants(plantData);
    setSearchTerm('');
  };

  return (
    <main>
      <div className="banner">
        <img src="../img/banner.png" alt="Banner Image" className="banner" />
      </div>

      <section className="title-section">
        <h2>Houseplants</h2>
      </section>

      <SearchFilter />

      <section className="search-section">
        <input
          type="text"
          id="searchInput"
          placeholder="Search for plants..."
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <button id="searchBtn" onClick={handleSearchClick}>Search</button>
        <button id="resetBtn" onClick={handleResetClick}>All</button>
      </section>

      <section className="plant-gallery">
        <div className="row">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant, index) => (
              <div className="card" key={index}>
                <img src={plant.img} alt={`${plant.name} Plant`} />
                <div className="card-content">
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-blurb">{plant.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No matches</p>
          )}
        </div>
      </section>
    </main>
  );
}
