export function NavButton(text, cssClass, querySelector, handlerFunction) {
    const newButton = document.createElement("button");
    newButton.classList.add("button", cssClass);
    newButton.setAttribute("data-js", querySelector);
    newButton.addEventListener("click", handlerFunction);
    newButton.textContent = text;
    return newButton;
}
