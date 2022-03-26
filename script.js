const addButton = document.querySelector("#add");
const room = document.querySelector(".room");
let h = document.querySelector("#h");
const ho1 = document.querySelector("#i1");
const ho2 = document.querySelector("#i2");
const ho3 = document.querySelector("#i3");
const hlog = document.querySelector(".log");
var hamsters = 2;
const m = document.querySelector("#m");
let months = 0;
let i = 1;

function addMonth() {
  months += 2;
  m.innerText = months;
  hlog.innerHTML += i + ". generáció";
  i++;
  multiplyHamsters(hamsters);
  if(months<12){
  showHamsters(hamsters);}
}

function multiplyHamsters(hamsters) {
  hlog.innerHTML +=
    "<br>hörcsögök száma szaporulat előtt: " + hamsters + "<br>";
  let halfOfHamsters = Math.floor(hamsters / 2);
  for (let i = 1; i <= halfOfHamsters; i++) {
    let r = Math.floor(Math.random() * 8) + 4;
    hlog.innerHTML += i + ". pár utódainak száma:" + r + "<br>";
    window["hamsters"] += r;
    //hamsters=hamsters+r;
  }
  h.innerText = window["hamsters"];
  hlog.innerHTML +=
    "új bébik száma összesen: " + (window["hamsters"] - hamsters) + "<br>";
  hlog.innerHTML += "hörcsögök száma összesen:" + window["hamsters"] + "<br>";
  hlog.innerHTML += "-------------------<br>";
  return hamsters;
}

function showHamsters(hamsters) {
  room.innerText="";
  console.log(hamsters);
  for (let i = 0; i < hamsters; i++) {
    let rh = Math.floor(Math.random() * 3) + 1;
    if (rh == 1) {
      let ho1copy=ho1.cloneNode(true)
      ho1copy.style.top = `${Math.random() * 87}%`;
      ho1copy.style.left = `${Math.random() * 90}%`;
      room.appendChild(ho1copy);
    }
    if (rh == 2) {
      let ho2copy=ho2.cloneNode(true);
      ho2copy.style.top = `${Math.random() * 86}%`;
      ho2copy.style.left = `${Math.random() * 90}%`;
      ho2copy.style.display = 'inline';
      room.appendChild(ho2copy);
    }
    if (rh == 3) {
      let ho3copy=ho3.cloneNode(true);
      ho3copy.style.top = `${Math.random() * 85}%`;
      ho3copy.style.left = `${Math.random() * 90}%`;
      room.appendChild(ho3copy);
    }
  }
}

addButton.addEventListener("click", addMonth);
