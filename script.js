const BASE_URL = 'https://pokeapi.co/api/v2/';
let pokemons = [];
let currentOffset = 0;
let isLoading = false;
let isBottomReached = false;

/**
 * Initialisiert die Anwendung durch Laden der ersten 30 Pokémon und Einrichtung des Scroll-Listeners.
 */
async function init() {
   setupScrollListener();
   await loadPokemon(50, 0);
   currentOffset = 50;
   renderCards();
}


/**
 * Setzt den Scroll-Listener ein, um festzustellen, ob das Ende der Seite erreicht wurde.
 */
function setupScrollListener() {
   window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
         isBottomReached = true;
      }
      loadMorePokemon();
   });
}


/**
 * Renders cards for all Pokémon and adds them to the DOM. This function first
 * generates HTML for each Pokémon card and then applies the appropriate background
 * colors based on the Pokémon's types.
 */
async function renderCards() {
   let cardContainer = document.getElementById('pokemonCards');
   let cardsHTML = '';

   pokemons.forEach((pokemon) => {
      cardsHTML += generatePokemonCardHTML(pokemon);
   });

   cardContainer.innerHTML = cardsHTML;

   pokemons.forEach((pokemon) => {
      setBackgroundcolorFromType(pokemon);
   });
}
