
// export function createNavButton(label, onClick, dataJs, className) {
//   const button = document.createElement("button");

//   button.textContent = label;

//   button.dataset.js = dataJs;

//   button.classList.add("button", className);

//   button.addEventListener("click", () => {
//     onClick();
//   });

//   return button;
// }




// CREATE BUTTON click
export function createNavButton(label, onClick) {
  const button = document.createElement("button");


  button.textContent = label;

  button.addEventListener("click", () => {
    onClick();
  });

  return button;
}


// You cannot export an event listener directly like this:

// export nextButton.addEventListener("click", () => {
//   if (page < maxPage) {
//     page++;
//     fetchCharacters();
//   }
// });

// export prevButton.addEventListener("click", () => {
//   if (page > 1) {
//     page--;
//     fetchCharacters();
//   }
// });