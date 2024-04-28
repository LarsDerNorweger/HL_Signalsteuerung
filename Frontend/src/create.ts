/**
 * function to create html elements dynamically
 * @namespace CreatePage
 */

import { getRuntime, getState, postData } from "./calls";

type Signal = "hp0" | "hp1" | "hp2"

export interface SignalData {
  shown: Signal
  signal: Signal[]
  on: boolean
}

export function createPage() {
  window.addEventListener("click", function (e) {
    e.preventDefault()
  })

  //create element for headline
  let header = create("header", document.body);
  header.id = "header"

  //set headline
  let headline = create("h1", header, "HL Signalsteuerung");

  //info icon as button
  let headlineInfo = create("div", header)
  headlineInfo.className = "info"

  headlineInfo.addEventListener("click", function (e) {
    //clear landing page
    document.getElementById("gridDiv").remove()
    
    //create div and add infos
    let infoDiv = create("div", document.body)
    infoDiv.id = "infoDiv"
    let infoList = create("ul", infoDiv)
    let authors = create("ul", infoList, "Authoren: deine mutter")
    let libraries = create("ul", infoList, "Bibliotheken: picocss")

    // get current runtime and display it
    let currentRuntime = getRuntime()
    // let runtime = create("ul", infoList, currentRuntime)

    //clear info div and show landing page again
    let back = create("button", infoDiv, "Zurück")
    back.addEventListener("click", function (e) {
      document.getElementById("infoDiv").remove()
      document.getElementById("header").remove()
      createPage()
    })
  })

  //create grid div
  let gridDiv = create("div", document.body)
  gridDiv.className = "grid"
  gridDiv.id = "gridDiv"

  //create output div
  let outputDiv = create("div", gridDiv)
  outputDiv.className = "outputDiv"
  
  let lightsOff = create("div", outputDiv)
  lightsOff.className = "off"
  lightsOff.id = "off"

  //create input div
  let inputDiv = create("div", gridDiv)

  //create element for form
  let form = create("form", inputDiv);
  
  //create array for signals pressed
  let signals = []

  //create buttons in form
  const btHP0 = create("button", form, "HP0");
  btHP0.addEventListener("click", function (e) {
    signals.push("hp0")
    console.log(signals)
    
    //tests
    // postData(signals)
    // getState()
    
    document.getElementById("off").style.display = "none"
    let hp0 = create("div", outputDiv)
    hp0.className = "hp0"
  })
 
  const btHP1 = create("button", form, "HP1");
  btHP1.addEventListener("click", function (e) {
    signals.push("hp1")
    console.log(signals)
    
    document.getElementById("off").style.display = "none"
    let hp1 = create("div", outputDiv)
    hp1.className = "hp1"
  })

  const btHP2 = create("button", form, "HP2");
  btHP2.addEventListener("click", function (e) {
    signals.push("hp2")
    console.log(signals)
    
    document.getElementById("off").style.display = "none"
    let hp2 = create("div", outputDiv)
    hp2.className = "hp2"
  })

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
