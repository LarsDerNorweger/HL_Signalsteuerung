// prevent reloading the page on click
// the page needs to be refreshed manually to sync with raspy
window.addEventListener("click", function (e) {
    e.preventDefault();
    getData();
  });
  
  //* get type and time from url
  function getData() {
    const getParams = new URLSearchParams(window.location.search);
  
    let dataURL = { params: [] };
    for (const param of getParams) {
      dataURL.params.push(param[1]);
      console.log(dataURL);
      console.log(param);
    }
  }
  
  //* send data to raspy
  async function postData() {
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
  
    let test = await fetch("", {
      method: "POST",
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(test);
  }