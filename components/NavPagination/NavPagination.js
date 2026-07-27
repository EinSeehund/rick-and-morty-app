import { createNavButton } from "../NavButton/NavButton.js";

// // 01 CREATES HTML
// export function createPagination() {
//   const navElement = document.createElement("nav");

//   navElement.innerHTML = `
//     <button data-js="prev-button">Previous</button>
//     <span data-js="pagination"></span>
//     <button data-js="next-button">Next</button>
//   `;

//   return navElement;
// }


export function createNavigation({ onPrev, onNext }) {
  const nav = document.createElement("nav");

  // CREATE prev/next BUTTONS
  const prevButton = createNavButton("Previous", onPrev);
  const nextButton = createNavButton("Next", onNext);

  // CREATE span pagination
  const pagination = document.createElement("span");

  pagination.dataset.js = "pagination";

  // append it all..
  nav.append(prevButton, pagination, nextButton);

  return nav;
}

