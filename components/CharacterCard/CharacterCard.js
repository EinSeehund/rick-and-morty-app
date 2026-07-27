
export function createCharacterCard() {
  const liElement = document.createElement("li");

  liElement.innerHTML = `
    <article class="card">
      <h2>Rick Sanchez</h2>
      <p>Status: Alive</p>
      <p>Species: Human</p>
      <p>Gender: Male</p>
    </article>
  `;

  return liElement;
}