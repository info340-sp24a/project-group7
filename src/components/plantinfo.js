import React from 'react';
import '../css/main.css'; // Import the CSS file
import '../css/plantinfo.css'; // Import the CSS file

export default function Plant() {
  return (
    <main>
    <section class="plant-title">
        <h2>Monstera</h2>
        <h3>Monstera deliciosa</h3>
        <div>
            <p class="plant-blurb">They are famous for their natural leaf-holes, which has led to their nickname, Swiss Cheese Plant.</p>
        </div>
    </section>

    <section class="main-plant">
        <div class="plant-image">
            <img src="img/monsterabiggo.webp" alt="Plant" class="center"/>
        </div>
    </section>

    <section class="plant-care">
        <div>
            <h2>Monster Care Instructions</h2>
            <p class="plant-blurb">Two different species of Monstera are cultivated as houseplants - Monstera deliciosa and Monstera adansonii. Monstera adansonii is distinguished from M. deliciosa by having longer, tapering leaves, as well as having completely enclosed leaf holes. Monstera deliciosa leaf holes eventually grow towards the edge and open up as they mature. Part of Araceae, the Aroid Family, they are one of the few aroids that produces edible fruit, particularly, Monstera deliciosa, though they rarely flower or produce edible fruit indoors. Monsteras, like many aroids, were made known formally to the botanical world during the early 20th century, although they had been known for much longer by the indigenous peoples of Central America.
            </p>

            <h3>Sunlight</h3>
            <p class="plant-blurb">Thrives in bright to medium indirect light. Not suited for intense, direct sun but can be acclimated to withstand it.</p>

            <h3>Water</h3>
            <p class="plant-blurb"> Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Pro tip: Monsteras can benefit from filtered water or water left out overnight before using.</p>
        </div>
    </section>
    </main>
  );
}




