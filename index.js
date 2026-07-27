import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]',);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');


// States // REPLACE CONST WITH LET //
let maxPage = 1;
let page = 1;
let searchQuery = "";

// API fetch call
async function fetchCharacters() {
    try {
        const response = await fetch(
            "https://rickandmortyapi.com/api/character?page=2",
        );

        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        const characterArray = data.results;
        console.log(characterArray);
        console.log(data.info.pages);

        maxPage = data.info.pages;

        cardContainer.innerHTML = "";
        
        data.results.forEach((character) => {
  
            cardContainer.append(
                createCharacterCard(character)
            );
        });

        pagination.textContent = `${page} / ${maxPage}`;

        //return data;
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        throw error; // Fehler weiterreichen, falls die aufrufende Funktion ihn braucht
    }
}

fetchCharacters();


