export function createPagination() {
  const navElement = document.createElement("nav");

  navElement.innerHTML = `
    <button data-js="prev-button">Previous</button>
    <span data-js="pagination"></span>
    <button data-js="next-button">Next</button>
  `;

  return navElement;
}