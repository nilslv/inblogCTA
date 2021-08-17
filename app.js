const urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get("text");
param = param != null ? param : "Try it out yourself!";

console.log(param);
document.getElementById("input").innerHTML = param;
