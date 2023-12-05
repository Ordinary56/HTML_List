//ts@check
"use strict";
/** @type {HTMLElement | null} */
const shelf = document.getElementById("shelf");

/** @type {HTMLElement | null} */
const store = document.getElementById("store");

for (let i = 0; i < store.children.length; i++) {
    store.children[i].addEventListener("click", (e) => { HighLightElement(e.target) });
    store.children[i].addEventListener("dblclick", (e) => { store.appendChild(e.target); });
}

for (let i = 0; i < shelf.children.length; i++) {
    shelf.children[i].addEventListener("click", (e) => { HighLightElement(e.target) });
    shelf.children[i].addEventListener("dblclick", (e) => { store.appendChild(e.target); });
}

/**
 * @param {HTMLElement} element
 */
const HighLightElement = (element) => {
    element.classList.toggle("active");

}
