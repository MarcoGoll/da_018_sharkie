/**
* Toggled a class of an HTML element
* @param {string} className - Name of the class
* @param {number} identifier - Id of the HTML element
*/
function toggleClass(className, identifier) {
    let element = document.getElementById(identifier);
    element.classList.toggle(className);
}