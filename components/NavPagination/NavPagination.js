export function NavPagination() {
    const newSpan = document.createElement("span");
    newSpan.classList.add("navigation__pagination");
    newSpan.setAttribute("data-js", "pagination");

    return newSpan;
}
