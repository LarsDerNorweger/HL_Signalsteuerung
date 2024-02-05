'use strict';

/**
 * function to create html elements dynamically
 * @namespace CreatePage
 */
function createPage() {
  //create element for headline
  let header = create("header", document.body);

  //set headline
  create("h1", header, "HL Signalsteuerung");

  //create element for form
  let form = create("form", document.body);

  //create inputs + labels
  //TODO: write helper function
  let labelType = create("label", form, "Type");
  let inputType = create("input", form);
  inputType.id = "type";
  inputType.type = "text";
  labelType.htmlFor = inputType.id;

  create("br", form);

  let labelTime = create("label", form, "Time");
  let inputTime = create("input", form);
  inputTime.id = "time";
  inputTime.type = "text";
  labelTime.htmlFor = inputTime.id;

  create("br", form);

  //create button in form
  create("button", form, "Send");
  
  /**
   * helper function to create html elements
   * @function createHTMLElements
   * @memberof CreatePage
   * @param {string} elementtype
   * @param {Node} target
   * @param {string} text
   * @returns {HTMLElement}
  */
 function create(elementtype, target, text) {
   let elem = document.createElement(elementtype);
   if (target instanceof Node) target.appendChild(elem);
   if (text) elem.innerText = text;
   return elem;
  }
}

function main() {
  createPage();
}

main();
