export function SearchBar(handleQuery) {
    const newForm = document.createElement("form");
    newForm.classList.add("search-bar");
    newForm.setAttribute("action", "");
    newForm.innerHTML = `
          <input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
    `;
    newForm.addEventListener("submit", handleQuery);
    return newForm;
}
