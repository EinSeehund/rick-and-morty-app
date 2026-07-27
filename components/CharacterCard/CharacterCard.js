// 02 FIRST FUNCTION
// export function createCharacterCard() {
//   const liElement = document.createElement("li");

//   liElement.innerHTML = `
//     <article class="card">
//       <h2>Rick Sanchez</h2>
//       <p>Status: Alive</p>
//       <p>Species: Human</p>
//       <p>Gender: Male</p>
//     </article>
//   `;

//   return liElement;
// }

// 03 DYNAMIC
export function createCharacterCard(character) {
  const liElement = document.createElement("li");

  liElement.innerHTML = `
    <article class="card">
      <img src="${character.image}" alt="${character.name}" />
      <h2>${character.name}</h2>
      <p>Status: ${character.status}</p>
      <p>Type: ${character.type}</p>
      <p>Occurrences: ${character.episode.length}</p>
    </article>
  `;

  return liElement;
}