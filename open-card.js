function openCardDetail(pokemonId) {
   const overlay = document.getElementById('overlay');
   const cardDetail = document.getElementById('card-detail');
   const pokemon = pokemons.find((pokemon) => pokemon.details.id.toString() === pokemonId);

   if (pokemon) {
      console.log(pokemon);
      cardDetail.innerHTML = generateOpenedPokemonCardHTML(pokemon);
      overlay.style.display = 'flex';
      changeContent('About', pokemonId);
      setBackgroundcolorFromTypeforOverlay(pokemon);
   }
}

/**
 * Schließt das Overlay und entfernt die Pokémon-Details.
 */
function closeCardDetail() {
   const overlay = document.getElementById('overlay');
   overlay.style.display = 'none'; // Versteckt das Overlay
   const cardDetail = document.getElementById('card-detail');
   cardDetail.innerHTML = ''; // Entfernt die Details
}

document.getElementById('overlay').addEventListener('click', function (event) {
   if (event.target === this) {
      closeCardDetail();
   }
});
