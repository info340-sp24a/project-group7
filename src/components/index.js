import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Get references to the necessary elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const plantCards = document.querySelectorAll('.card');

// Event listener for search button
searchBtn.addEventListener('click', filterPlants);

// Event listener to input field for live filtering
searchInput.addEventListener('input', filterPlants);

// Function to filter plant cards
function filterPlants() {
  const searchQuery = searchInput.value.toLowerCase();

  plantCards.forEach(card => {
    const plantName = card.querySelector('.plant-name').textContent.toLowerCase();
    const plantBlurb = card.querySelector('.plant-blurb').textContent.toLowerCase();

    if (plantName.includes(searchQuery) || plantBlurb.includes(searchQuery)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}