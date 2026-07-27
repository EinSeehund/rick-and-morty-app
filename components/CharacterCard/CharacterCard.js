// 02 FIRST FUNCTION
// export function createCharacterCard() {
//   const liElement = document.createElement("li");


// 06 accept the character data as an argument.
export function createCharacterCard(characterData) {
    const newListElement = document.createElement("li");
    newListElement.classList.add("card");
      newListElement.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src="${characterData.image}"
              alt="${characterData.name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${characterData.name}</h2> 
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${characterData.status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${characterData.type}</dd>
              <dt class="card__info-title">Occurencies</dt>
              <dd class="card__info-description">${characterData.episode.length}</dd>
            </dl>
          </div>
         `;

    return newListElement;
}




// 02 COMPONENT
// newListElement.innerHTML = `
//        <li class="card">
//           <div class="card__image-container">
//             <img
//               class="card__image"
//               src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
//               alt="Rick Sanchez"
//             />
//             <div class="card__image-gradient"></div>
//           </div>
//           <div class="card__content">
//             <h2 class="card__title">Rick Sanchez</h2>
//             <dl class="card__info">
//               <dt class="card__info-title">Status</dt>
//               <dd class="card__info-description">Alive</dd>
//               <dt class="card__info-title">Type</dt>
//               <dd class="card__info-description"></dd>
//               <dt class="card__info-title">Occurrences</dt>
//               <dd class="card__info-description">51</dd>
//             </dl>
//           </div>
//         </li> `

