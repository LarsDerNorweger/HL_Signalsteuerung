import  {readFileSync,writeFileSync,existsSync} from "fs"
import  { exit } from "process"

import {compile} from "sass"

const input = {
    html:"./indexTemplate.html",
    js:"./build/bundle.js",
    sass:"./style/main.sass",
}

for (let i of Object.keys(input))
    if(!existsSync(input[i]))
    {
        console.error(`Der Pfad ${input[i]} für ${i} konnte nicht gefunden werden`)
        exit(1)
    }

let x = new TextDecoder()
let htmlTemplate = x.decode(readFileSync(input.html))
let js = x.decode(readFileSync(input.js))
let css = compile(input.sass,{style:"compressed"})
htmlTemplate = htmlTemplate.replace("$SCRIPT$",js)
htmlTemplate = htmlTemplate.replace("$STYLE$",css.css)
writeFileSync("./index.html",htmlTemplate)