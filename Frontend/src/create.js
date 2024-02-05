/**
 * function to create html elements dynamically
 * @namespace CreatePage
 */
export function createPage() {
  //create element for headline
  let header = create("header", document.body);

  //set headline
  let headline = create("h1", header, "HL Signalsteuerung");

  //create element for form
  let form = create("form", document.body);

  //create inputs + labels
  //TODO: write helper function
  let labelType = create("label", form, "Type");
  let inputType = create("input", form);
  inputType.id = "type";
  inputType.type = "text";
  labelType.htmlFor = inputType.id;

  let br = create("br", form);

  let labelTime = create("label", form, "Time");
  let inputTime = create("input", form);
  inputTime.id = "time";
  inputTime.type = "text";
  labelTime.htmlFor = inputTime.id;

  let br2 = create("br", form);

  //create button in form
  const formButton = create("button", form, "Send");
  
  /**
   * helper function to create html elements
   * @function create
   * @memberof CreatePage
   * @param {string} elementtype - what element should be created
   * @param {Node} target - where should it be created
   * @param {string} [text] - innerText for headline, labels etc.
   * @return {HTMLElement}
  */
 function create(elementtype, target, text) {
   let elem = document.createElement(elementtype);
   if (target instanceof Node) target.appendChild(elem);
   if (text) elem.innerText = text;
   return elem;
  }
}
