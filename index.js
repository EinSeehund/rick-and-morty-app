import { createCharacterCard } from "../components/CharacterCard/CharacterCard.js";
import { createNavigation } from "../components/NavPagination/NavPagination.js";
import { createSearchBar } from "../components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const navigationContainer = document.querySelector(
  '[data-js="navigation"]'
);

console.log(cardContainer);
console.log(searchBarContainer);
console.log(navigationContainer);

// State
let maxPage = 1;
let page = 1;
let searchQuery = "";

// -----------------------------
// FETCH CHARACTERS
// -----------------------------
async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${searchQuery}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Character not found");
    }

    const data = await response.json();
    console.log("API DATA:", data);

    // update max pages
    maxPage = data.info.pages;

    // clear old cards
    cardContainer.innerHTML = "";

    // create character cards
    data.results.forEach((character) => {
      //  cardContainer.innerHTML = "";
      cardContainer.append(createCharacterCard(character));
    });

    // update pagination
    pagination.textContent = `${page} / ${maxPage}`;

  }  // error
  catch (error) {
    console.error(error);

    cardContainer.innerHTML = `
      <li class="card">
        <p>No characters found</p>
      </li>
    `;
  }
}


// -----------------------------
// SEARCH BAR COMPONENT
// -----------------------------
const searchBar = createSearchBar({
  onSubmit: (query) => {
    searchQuery = query;
    page = 1;

    fetchCharacters();
  },
});

searchBarContainer.append(searchBar);


// -----------------------------
// NAVIGATION COMPONENT
// -----------------------------
const navigation = createNavigation({
  onPrev: () => {
    if (page > 1) {
      page--;
      fetchCharacters();
    }
  },

  onNext: () => {
    if (page < maxPage) {
      page++;
      fetchCharacters();
    }
  },
});

navigationContainer.append(navigation);


// -----------------------------
// PAGINATION DISPLAY
// -----------------------------
const pagination = document.querySelector('[data-js="pagination"]');


// -----------------------------
// INITIAL LOAD
// -----------------------------
fetchCharacters();