// prevent reloading the page on click
// the page needs to be refreshed manually to sync with raspy
window.addEventListener("click", function (e) {
  e.preventDefault();
});

//* get type and time from url
const getData = () => {
  const urlParams = window.location.search;
  const getParams = new URLSearchParams(urlParams);

  let dataURL = { params: [] };
  for (const param of getParams) {
    dataURL.params.push(param[1]);
    console.log(dataURL);
  }
};

//* send data to raspy
const postData = () => {
  // get values from input form
  let formType = document.getElementById("formType").value;
  let formTime = document.getElementById("formTime").value;

  let data = [formType, formTime];
  console.log(data);

  //manually update url because page doesnt reload
  window.history.replaceState(
    null,
    document.title,
    "/Frontend/index.html?type=" + data[0] + "&time=" + data[1]
  );

  fetch("", {
    method: "POST",
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    // .then((response) => {
    //   console.log(response);
    //   if (response.ok) {
    //     return response.json();
    //   } else alert("Sending data failed");
    //   return Promise.error;
    // })
    .then((data) => console.log(data));
};
