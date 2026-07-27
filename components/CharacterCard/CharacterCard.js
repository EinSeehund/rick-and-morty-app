// 02 FIRST FUNCTION
// export function createCharacterCard() {
//   const liElement = document.createElement("li");

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
