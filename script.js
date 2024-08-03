/* função para altenar os tab-content, fazendo aparecer no mesmo lugar */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  document.getElementById(tabname).classList.add("active-link");
  
}

const sections = document.getElementsByClassName("my-section");

function openCL1(tabname) {
  for (section of sections) {
    section.classList.remove("visible-section");
  }
  document.getElementById(tabname).classList.add("visible-section");
}

function openCL2(tabname) {
  document.getElementById(tabname).classList.remove("visible-section");
}
