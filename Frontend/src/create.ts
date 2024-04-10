/**
 * function to create html elements dynamically
 * @namespace CreatePage
 */
export function createPage() {
  //create element for headline
  let header = create("header", document.body);

  //set headline
  let headline = create("h1", header, "HL Signalsteuerung");

  //info icon as button
  let headlineInfo = create("button", header, "Placeholder Info")
  let infoSpan = create("span", headlineInfo)
  infoSpan.className = "info"
  headlineInfo.addEventListener("click", function (e) {
    //clear landing page
    document.getElementById("gridDiv").innerHTML = ""
    
    //create div and add infos
    let infoDiv = create("div", document.body)
    infoDiv.id = "infoDiv"
    let infoList = create("ul", infoDiv)
    let authors = create("ul", infoList, "Authoren: deine mutter")
    let libraries = create("ul", infoList, "Bibliotheken: picocss")

    //clear info div and show landing page again
    let back = create("button", infoDiv, "Zurück")
    back.addEventListener("click", function (e) {
      document.getElementById("infoDiv").innerHTML = ""
    })
  })


  //create grid div
  let gridDiv = create("div", document.body)
  gridDiv.className = "grid"
  gridDiv.id = "gridDiv"

  //create output div
  let outputDiv = create("div", gridDiv)
  let svgPlaceholder = create("h3", outputDiv, "HIER KOMMT DIE SVG HIN")

  //create input div
  let inputDiv = create("div", gridDiv)

  //create element for form
  let form = create("form", inputDiv);

  //create inputs + labels
  //TODO: write helper function
  // let labelType = create("label", form, "Type");
  // let inputType = create("input", form);
  // inputType.id = "type";
  // inputType.type = "text";
  // labelType.htmlFor = inputType.id;

  //create buttons in form
  const btHP0 = create("button", form, "HP0");
  const btHP1 = create("button", form, "HP1");
  const btHP2 = create("button", form, "HP2");
  const btAdd = create("button", form, "+")

  /**
   * helper function to create html elements
   * @function create
   * @memberof CreatePage
   * @param {string} elementtype - what element should be created
   * @param {Node} target - where should it be created
   * @param {string} [text] - innerText for headline, labels etc.
   * @return {HTMLElement}
  */
  function create<T extends keyof HTMLElementTagNameMap>(elementtype: T, target?: HTMLElement, text?: string): HTMLElementTagNameMap[T] {
    let elem = document.createElement(elementtype);
    if (target instanceof Node) target.appendChild(elem);
    if (text) elem.innerText = text;
    return elem;
  }
}
