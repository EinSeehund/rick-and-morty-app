

export function createSearchBar({ onSubmit }) {
  const form = document.createElement("form");

  form.classList.add("search-bar");

  form.innerHTML = `
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const query = formData.get("query");

    onSubmit(query);
  });

  return form;
}

// export searchBar.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const data = new FormData(searchBar);
//     searchQuery = data.get("query");
//     page = 1;
//     fetchCharacters();
// });