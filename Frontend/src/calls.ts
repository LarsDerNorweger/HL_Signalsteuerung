import { SignalData } from "./create"

// get current raspy runtime  
export async function getRuntime() {  
  await fetch("https://host/apiv1/time")
  
  .then((response) => response.json())
  
  .then((response) => {
    if(Object.keys(response).length === 0) throw new Error("empty object")
      else return response.timeinSec
  })

  .then((json) => console.log(json))

  .catch((error) => console.log(error))
}

//function to check if data respects interface
function isValid(value: SignalData): value is SignalData {
  if(value.shown && value.signal && value.on) return true
}

// get current shown state and if its on or not
export async function getState() {
  await fetch("https://host/api/v1/state?data={signal:Signal[],on:boolean}")
  
  .then((response) => response.json())

  .then((response) => {
    if (!isValid(response)) throw new Error("data invalid")
      else return response
  })
  
  .then((json) => console.log(json))
  
  .catch((error) => console.log(error))
}


// send data to raspy
export async function postData(data) {

  await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  .then((response) => {
    console.log(response)
    if(response.ok) {
      return response.json()
    }
    else return Promise.reject(new Error("couldnt send data"))
  })

  .then((data) => {
    console.log(data)
  })
}