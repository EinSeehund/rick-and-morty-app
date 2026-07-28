export function NavButton(text, cssClass, handlerFunction) {
    const newButton = document.createElement("button");
    newButton.classList.add("button", cssClass);
    newButton.addEventListener("click", handlerFunction);
    newButton.textContent = text;
    return newButton;
}
