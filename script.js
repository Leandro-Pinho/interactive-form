/* função para altenar os tab-content, fazendo aparecer no mesmo lugar */
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // event.currentTarget.classList.add("active-tab");
    document.getElementById(tabname).classList.add("active-link")
    // document.getElementById(tabname).classList.add("active-tab")
}

function openCL(tabname) {
    
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-tab");
    // document.getElementById(tabname).classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}