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


// import { createNavButton } from "../NavButton/NavButton.js";

// export function createPagination({ onPrev, onNext }) {
//   const nav = document.createElement("nav");

//   const prevButton = createNavButton(
//     "Previous",
//     onPrev,
//     "button-prev",
//     "button--prev"
//   );

//   const nextButton = createNavButton(
//     "Next",
//     onNext,
//     "button-next",
//     "button--next"
//   );

//   const pagination = document.createElement("span");
//   pagination.dataset.js = "pagination";

//   nav.append(prevButton, pagination, nextButton);

//   return nav;
// }


export function createNavigation({ onPrev, onNext }) {
  const nav = document.createElement("nav");

  // CREATE prev/next BUTTONS
  const prevButton = createNavButton("Previous", onPrev);
  const nextButton = createNavButton("Next", onNext);

//   // add styling
//   // button.classList.add("button--next");
//   // button.classList.add("button--prev");

//    // add styling
  prevButton.classList.add("button", "button--prev");
  nextButton.classList.add("button", "button--next");

//   // CREATE span pagination
  const pagination = document.createElement("span");

  pagination.dataset.js = "pagination";

  // append it all..
  nav.append(prevButton, pagination, nextButton);

  return nav;
}

