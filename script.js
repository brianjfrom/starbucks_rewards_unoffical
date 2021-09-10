// https://www.frontendpractice.com/project/starbucks
// https://www.starbucks.com/rewards

let borderInfo = "0.25rem solid #008248"
let val20 = (document.querySelector(".value25").onload = loadFunction());
let rewards = (document.querySelector('.reward1').onload = rewardLoad())

function loadFunction() {
  document.querySelector(".value25").style.borderBottom = borderInfo;
}

function rewardLoad() {
  document.querySelector('.reward1').style.display = "block";
}

function value25() {
  document.querySelector('.value25').style.borderBottom = borderInfo;
  document.querySelector('.value50').style.borderBottom = 'none';
  document.querySelector('.value150').style.borderBottom = 'none';
  document.querySelector('.value200').style.borderBottom = 'none';
  document.querySelector('.value400').style.borderBottom = 'none';
  document.querySelector('.reward1').style.display = "block";
  document.querySelector('.reward2').style.display = "none";
  document.querySelector('.reward3').style.display = "none";
  document.querySelector('.reward4').style.display = "none";
  document.querySelector('.reward5').style.display = "none";
}
function value50() {
  document.querySelector('.value50').style.borderBottom = borderInfo
  document.querySelector('.value25').style.borderBottom = "none";
  document.querySelector('.value150').style.borderBottom = "none";
  document.querySelector('.value200').style.borderBottom = "none";
  document.querySelector('.value400').style.borderBottom = "none";
  document.querySelector('.reward2').style.display = "block";
  document.querySelector('.reward1').style.display = "none";
  document.querySelector('.reward5').style.display = "none";
  document.querySelector('.reward3').style.display = "none";
  document.querySelector('.reward4').style.display = "none";
}
function value150() {
  document.querySelector('.value150').style.borderBottom = borderInfo;
  document.querySelector('.value25').style.borderBottom = 'none';
  document.querySelector('.value50').style.borderBottom = 'none';
  document.querySelector('.value200').style.borderBottom = 'none';
  document.querySelector('.value400').style.borderBottom = 'none';
  document.querySelector('.reward3').style.display = "block";
  document.querySelector('.reward1').style.display = "none";
  document.querySelector('.reward2').style.display = "none";
  document.querySelector('.reward4').style.display = "none";
  document.querySelector('.reward5').style.display = "none";

}
function value200() {
  document.querySelector('.value200').style.borderBottom = borderInfo;
  document.querySelector('.value25').style.borderBottom = 'none';
  document.querySelector('.value50').style.borderBottom = 'none';
  document.querySelector('.value150').style.borderBottom = 'none';
  document.querySelector('.value400').style.borderBottom = 'none';
  document.querySelector('.reward4').style.display = "block";
  document.querySelector('.reward1').style.display = "none";
  document.querySelector('.reward2').style.display = "none";
  document.querySelector('.reward3').style.display = "none";
  document.querySelector('.reward5').style.display = "none";
}
function value400() {
  document.querySelector('.value400').style.borderBottom = borderInfo;
  document.querySelector('.value25').style.borderBottom = 'none';
  document.querySelector('.value50').style.borderBottom = 'none';
  document.querySelector('.value150').style.borderBottom = 'none';
  document.querySelector('.value200').style.borderBottom = 'none';
  document.querySelector('.reward5').style.display = "block";
  document.querySelector('.reward1').style.display = "none";
  document.querySelector('.reward2').style.display = "none";
  document.querySelector('.reward3').style.display = "none";
  document.querySelector('.reward4').style.display = "none";
}

function addText() {
  document.querySelector('#text').placeholder = "";

  let addBox = document.querySelector('.fieldset');
  let newText = document.createElement("legend")
  newText.classList.add('legend')
  newText.innerHTML = "Enter Your Star Code";
  
  let leg = document.querySelector('.legend');
  if (typeof(leg) != 'undefined' && leg != null) {
    console.log("already exists")
  }
  else {
    document.querySelector('.fieldset').appendChild(newText);
    document.querySelector('.fieldset').style = "border-color: #008248";
    newText.style = "color: #008248";
  }
}

function inputInfo() {
  let starCode = document.getElementById("text").value
  console.log(starCode);

  if (typeof starCode === "undefined" || starCode === null || starCode === "") {
    document.querySelector('.fieldset').style = "border-color: red";
    document.querySelector('.legend').style.color = "red"
  } else {
    document.querySelector('.fieldset').style = "border-color: #008248";
    document.querySelector('.legend').style.color = "#008248";
    alert("Thank your for your Star Code");
  }
}

function infoResA() {
  const about = document.querySelector('.about');
  if (about.className === "about") {
    about.className += " info-res";
  } else {
    about.className = "about";
  }
}

function infoResC() {
  const career = document.querySelector('.career');
  if (career.className === "career") {
    career.className += " info-res";
  } else {
    career.className = "career";
  }
}
function infoResSI() {
  const socialImpact = document.querySelector('.socialImpact');
  if (socialImpact.className === "socialImpact") {
    socialImpact.className += " info-res";
  } else {
    socialImpact.className = "socialImpact"
  } 
}
function infoResP() {
  const partners = document.querySelector('.partners');
  if (partners.className === "partners") {
    partners.className += " info-res";
  } else {
    partners.className = "partners"
  }
}
function infoResO() {
  const orders = document.querySelector('.orders');
  if (orders.className === "orders") {
    orders.className += " info-res";
 } else {
   orders.className = "orders"
 }
}

function hamburgerToggle() {
  const firstToggle = document.querySelector('.first-toggle') 
  const secToggle = document.querySelector('.second-toggle');
  if (firstToggle.className === "first-toggle") {
    firstToggle.className += " nav-toggle";
    firstToggle.style.display = "flex"
  } else {
    firstToggle.className = "first-toggle";
    secToggle.className = "second-toggle"

  }
  
}
function secondToggle() {
  const secToggle = document.querySelector('.second-toggle');
  if (secToggle.className === "second-toggle"){
    secToggle.className += " toggle";
    secToggle.style.display = "flex";
  } else {
     secToggle.className = "second-toggle";
  }
}
