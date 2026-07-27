import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// API fetch call
async function fetchCharacters() {
    try {
        const response = await fetch(
            "https://rickandmortyapi.com/api/character",
        );

        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();
        const characterArray = data.results;
        console.log(characterArray);
        cardContainer.innerHTML = "";
        characterArray.forEach((character) => {
            cardContainer.append(
                createCharacterCard(
                    character.image,
                    character.name,
                    character.status,
                    character.type,
                    character.episode.length,
                ),
            );
        });

        //return data;
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        throw error; // Fehler weiterreichen, falls die aufrufende Funktion ihn braucht
    }
}

fetchCharacters();

// const apiFetchResult = fetchCharacters()
//     .then((characters) => console.log(characters.results))
//     .catch((error) => console.error(error));

// Mock data for testing the createCharacterCard function
// const newCharacterCard = createCharacterCard(
//     "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//     "Morty Smith",
//     "Alive",
//     "",
//     51,
// );

// cardContainer.append(newCharacterCard);
