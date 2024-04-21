// get current raspy runtime  
export async function getRuntime() {
  let response = await fetch("https://host/apiv1/time")
  let runtime = await response.json()
  return runtime
}

// get current shown state and if its on or not
//!!!!!!!!!TODO DIESER CODE IST NICHT LAUFFÄHIG!!!!!!
// falls im server ein Fehler vorliegt kann auch ein leerstring zurück kommen!!!!!!!!!!!!!!!!!!!
// beachte die FEHLERAUSGABE!!!!!!!!!!!!!!!!!!!! 
async function getState() {
  let response = await fetch("https://host/api/v1/state?data={signal:Signal[],on:boolean}")
  let state = await response.json()
  return state
}

// send data to raspy
// async function postData() {
//   // get values from input form
//   let formType = document.getElementById("formType");
//   let formTime = document.getElementById("formTime");

//   let data = [formType, formTime];
//   console.log(data);

//   //manually update url because page doesnt reload
//   window.history.replaceState(
//     null,
//     document.title,
//     "/Frontend/index.html?type=" + data[0] + "&time=" + data[1]
//   );

//   let test = await fetch("", {
//     method: "POST",
//     headers: {
//       // "Content-Type": "application/x-www-form-urlencoded",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(test);
// }