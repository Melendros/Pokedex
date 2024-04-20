/**
 * Generates the HTML for a single Pokémon card.
 * @param {Object} pokemon - The Pokémon data object containing all necessary information to render the card.
 * @returns {string} The HTML string for the Pokémon card.
 */
function generatePokemonCardHTML(pokemon) {
   const cardHTML = /*html*/ `
      <div
         class="pokemon-card"
         id="card-${pokemon.details.id}"
         data-pokemon-id="${pokemon.details.id}"
         onclick="openCardDetail('${pokemon.details.id}')"
      >
         <div class="card_type_div">
            <div class="card_type">
               ${pokemon.details.types.map((type) => type.type.name.toUpperCase()).join(', ')}
            </div>
         </div>
         <img
            class="card_img"
            src="${
               pokemon.details.sprites.other.dream_world.front_default ||
               pokemon.details.sprites.other.home.front_default
            }"
            alt="${pokemon.name}"
         />
         <div class="card_span_div">
            <div class="card_number">#${pokemon.details.id}</div>
            <div class="card_name">${pokemon.name.toUpperCase()}</div>
         </div>
      </div>
   `;
   return cardHTML;
}

/**
 * Generates the HTML for a single Pokémon card.
 * @param {Object} pokemon - The Pokémon data object containing all necessary information to render the card.
 * @returns {string} The HTML string for the Pokémon card.
 */
function generateOpenedPokemonCardHTML(pokemon) {
   const aboutContent = generateAboutContent(pokemon.details.id.toString());

   const openCardHTML = /*html*/ `
       <div class="pokemonDetailCard" id="pokemonDetailCard" data-pokemon-id="${pokemon.details.id}">
           <div class="openCard_span_div">
               <div class="openCard_number">#${pokemon.details.id}</div>
               <div class="openCard_name">${pokemon.name.toUpperCase()}</div>
           </div>

           <div class="openCard_details">
               <img
                   class="detail_img"
                   src="${pokemon.details.sprites.other.dream_world.front_default || pokemon.details.sprites.other.home.front_default}"
                   alt="${pokemon.name}"
               />

               <div class="detail_content">
                   <nav>
                       <p class="active" onclick="changeContent('About', '${pokemon.details.id}')">About</p>
                       <p onclick="changeContent('Base Stats', '${pokemon.details.id}')">Base Stats</p>
                       <p onclick="changeContent('Moves', '${pokemon.details.id}')">Moves</p>
                       <p onclick="changeContent('Evolution', '${pokemon.details.id}')">Evolution</p>
                   </nav>

                   <div class="nav_result">
                       ${aboutContent}
                   </div>
               </div>
           </div>
       </div>
   `;
   return openCardHTML;
}





function generateAboutContent(pokemonId) {
   const pokemon = pokemons.find(p => p.details.id.toString() === pokemonId);
   if (!pokemon) return '<div>Pokémon not found.</div>';  // Falls das Pokémon nicht gefunden wird

   const types = pokemon.details.types.map(type => type.type.name).join(', ');
   const abilities = pokemon.details.abilities.map(ability => ability.ability.name).join(', ');

   return `
       <div class="nav_row">
           <h2>Types:</h2>
           <div>${types}</div>
       </div>
       <div class="nav_row">
           <h2>Species:</h2>
           <span>${pokemon.speciesDetails.genera[7].genus}</span>
       </div>
       <div class="nav_row">
           <h2>Height:</h2>
           <span>${pokemon.details.height / 10} m</span>
       </div>
       <div class="nav_row">
           <h2>Weight:</h2>
           <span>${pokemon.details.weight / 10} kg</span>
       </div>
       <div class="nav_row">
           <h2>Abilities:</h2>
           <span>${abilities}</span>
       </div>
   `;
}


function generateBaseStatsContent(pokemonId) {
   return '<div>Base Stats content here</div>';
}

function generateMovesContent(pokemonId) {
   return '<div>Moves content here</div>';
}

function generateEvolutionContent(pokemonId) {
   return '<div>Evolution chain here</div>';
}