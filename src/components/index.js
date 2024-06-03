import React from 'react';
import '../css/main.css'; // Import the CSS file
import '../css/index.css';

export default function PlantGallery() {
  return (
    <main>
      <div className="banner">
        <img src="../img/banner.png" alt="Banner Image" className="banner" />
      </div>

      <section className="title-section">
        <h2>Houseplants</h2>
      </section>

      <section className="search-section">
        <input type="text" id="searchInput" placeholder="Search for plants..." />
        <button id="searchBtn">Search</button>
      </section>

      <section className="plant-gallery">
        <div className="row">
          {/* Plant 1 */}
          <div className="card">
            <img src="../img/Rectangle 68.png" alt="Monstera Plant" />
            <div className="card-content">
              <h3 className="plant-name">Monstera</h3>
              <p className="plant-blurb">They are famous for their natural leaf-holes, which has led to their
                nickname, Swiss Cheese Plant.</p>
            </div>
          </div>
          {/* Plant 2 */}
          <div className="card">
            <img src="../img/pothos.jpg" alt="Pothos Plant" />
            <div className="card-content">
              <h3 className="plant-name">Pothos</h3>
              <p className="plant-blurb">Pothos are beloved for their trailing vines of glossy, heart-shaped leaves and easy
                care requirements.</p>
            </div>
          </div>
          {/* Plant 3 */}
          <div className="card">
            <img src="../img/spiderplant.jpg" alt="Spider Plant" />
            <div className="card-content">
              <h3 className="plant-name">Spider Plant</h3>
              <p className="plant-blurb">Spider plants are unmistakable with their arching, grassy leaves striped in green and
                white.</p>
            </div>
          </div>
          {/* Plant 4 */}
          <div className="card">
            <img src="../img/Rectangle 14.png" alt="Snake Plant" />
            <div className="card-content">
              <h3 className="plant-name">Snake Plant</h3>
              <p className="plant-blurb">The upright, sword-like leaves of the snake plant make it an architectural and
                low-maintenance choice.
              </p>
            </div>
          </div>
          {/* Plant 5 */}
          <div className="card">
            <img src="../img/Rectangle 69.png" alt="Cat Palm" />
            <div className="card-content">
              <h3 className="plant-name">Cat Palm</h3>
              <p className="plant-blurb">The cat palm is prized for its fluffy, arching fronds of slender green leaves that
                give it a lush, tropical appearance.</p>
            </div>
          </div>
          {/* Plant 6 */}
          <div className="card">
            <img src="../img/chineseevergreen.jpg" alt="Chinese Evergreen" />
            <div className="card-content">
              <h3 className="plant-name">Chinese Evergreen</h3>
              <p className="plant-blurb">Chinese evergreens have beautiful, oval leaves patterned in shades of green, pink,
                red, and white depending on the variety.</p>
            </div>
          </div>
          {/* Plant 7 */}
          <div className="card">
            <img src="../img/dracaena.jpg" alt="Dracaena Plant" />
            <div className="card-content">
              <h3 className="plant-name">Dracaena</h3>
              <p className="plant-blurb">Dracaenas are a diverse group of plants valued for their upright, cane-like stems and
                colorful sword-shaped leaves.</p>
            </div>
          </div>
          {/* Plant 8 */}
          <div className="card">
            <img src="../img/zzplant.jpg" alt="ZZ Plant" />
            <div className="card-content">
              <h3 className="plant-name">ZZ Plant</h3>
              <p className="plant-blurb">The ZZ plant is prized for its thick, waxy stems densely covered in glossy green
                leaves.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

