import React, { useState } from 'react';
import '../css/main.css';
import '../css/index.css';
import SearchFilter from '../components/SearchFilter.js';

const plantData = [
  {
    name: 'Monstera',
    img: '../img/Rectangle 68.png',
    description: 'They are famous for their natural leaf-holes, which has led to their nickname, Swiss Cheese Plant.',
    lightRequirement: 'Medium Light',
    wateringFrequency: 'Medium',
    link: 'https://www.thesill.com/blog/how-to-care-for-monstera-monstera-deliciosa'
  },
  {
    name: 'Pothos',
    img: '../img/pothos.jpg',
    description: 'Pothos are beloved for their trailing vines of glossy, heart-shaped leaves and easy care requirements.',
    lightRequirement: 'Low Light',
    wateringFrequency: 'Low',
    "link": "https://www.thesill.com/blog/how-to-care-for-golden-pothos-epipremnum-aureum"
  },
  {
    name: 'Spider Plant',
    img: '../img/spiderplant.jpg',
    description: 'Spider plants are unmistakable with their arching, grassy leaves striped in green and white.',
    lightRequirement: 'Bright Light',
    wateringFrequency: 'Medium',
    "link": "https://www.thesill.com/blog/how-to-care-for-a-spider-plant"
  },
  {
    name: 'Snake Plant',
    img: '../img/Rectangle 14.png',
    description: 'The upright, sword-like leaves of the snake plant make it an architectural and low-maintenance choice.',
    lightRequirement: 'Low Light',
    wateringFrequency: 'Low',
    "link": "https://www.thesill.com/blog/how-to-care-for-a-snake-plant"
  },
  {
    name: 'Cat Palm',
    img: '../img/Rectangle 69.png',
    description: 'The cat palm is prized for its fluffy, arching fronds of slender green leaves that give it a lush, tropical appearance.',
    lightRequirement: 'Medium Light',
    wateringFrequency: 'High',
    "link": "https://www.thesill.com/blog/how-to-care-for-majesty-palm-ravenea-rivularis"
  },
  {
    name: 'Chinese Evergreen',
    img: '../img/chineseevergreen.jpg',
    description: 'Chinese evergreens have beautiful, oval leaves patterned in shades of green, pink, red, and white depending on the variety.',
    lightRequirement: 'Low Light',
    wateringFrequency: 'Medium',
    "link":"https://www.thesill.com/blog/how-to-care-for-an-aglaonema-plant"
  },
  {
    name: 'Dracaena',
    img: '../img/dracaena.jpg',
    description: 'Dracaenas are a diverse group of plants valued for their upright, cane-like stems and colorful sword-shaped leaves.',
    lightRequirement: 'Medium Light',
    wateringFrequency: 'Low',
    "link": "https://www.thesill.com/blog/how-to-care-for-a-dracaena"
  },
  {
    name: 'ZZ Plant',
    img: '../img/zzplant.jpg',
    description: 'The ZZ plant is prized for its thick, waxy stems densely covered in glossy green leaves.',
    lightRequirement: 'Low Light',
    wateringFrequency: 'Low',
    "link": "https://www.thesill.com/blog/how-to-care-for-zz-zamioculcas-zamiifolia"
  }
];

export default function PlantGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlants, setFilteredPlants] = useState(plantData);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (searchTerm, selectedCategories, selectedLightRequirements, selectedWateringFrequencies) => {
    const filtered = plantData.filter(plant => {
      const matchesSearchTerm = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(plant.name);
      const matchesLight = selectedLightRequirements.length === 0 || selectedLightRequirements.includes(plant.lightRequirement);
      const matchesWatering = selectedWateringFrequencies.length === 0 || selectedWateringFrequencies.includes(plant.wateringFrequency);
      return matchesSearchTerm && matchesCategory && matchesLight && matchesWatering;
    });
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

      <SearchFilter onSearch={handleSearch} />

      <section className="search-section">
        <input
          type="text"
          id="searchInput"
          placeholder="Search for plants..."
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <button aria-label='search-button' id="searchBtn" onClick={() => handleSearch(searchTerm, [], [], [])}>Search</button>
        <button aria-label='reset-to-all-button' id="resetBtn" onClick={handleResetClick}>All</button>
      </section>

      <section className="plant-gallery">
        <div className="row">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant, index) => (
              <div className="card" key={index}>
                <a href={plant.link || '#'} target="_blank" rel="noopener noreferrer">
                  <img src={plant.img} alt={`${plant.name} Plant`} />
                    <h3 className="plant-name">{plant.name}</h3>
                    </a>
                    <div className="card-content">
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
