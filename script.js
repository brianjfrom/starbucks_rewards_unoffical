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
    document.querySelector('.value50').style.borderBottom = borderInfo;
    document.querySelector('.value25').style.borderBottom = "none";
    document.querySelector('.value150').style.borderBottom =  "none";
    document.querySelector('.value200').style.borderBottom = "none";
    document.querySelector('.value400').style.borderBottom =  "none";
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