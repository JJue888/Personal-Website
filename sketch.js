let home = document.getElementById("Home_Button");
let info = document.getElementById("info_button");
let exp = document.getElementById("exp_button");
let contact = document.getElementById("contact_button");


home.onclick = function(event) {
    event.preventDefault();
    document.getElementById("Origin").style.display ="block";
    document.getElementById("Aboutme").style.display = "none";
    document.getElementById("Experience").style.display = "none";
    document.getElementById("Contact").style.display = "none";
}

info.onclick = function(event) {
    event.preventDefault();
    document.getElementById("Origin").style.display = "none";
    document.getElementById("Aboutme").style.display = "block";
    document.getElementById("Experience").style.display = "none";
    document.getElementById("Contact").style.display = "none";
}

exp.onclick = function(event) {
    event.preventDefault();
    document.getElementById("Origin").style.display = "none";
    document.getElementById("Aboutme").style.display = "none";
    document.getElementById("Experience").style.display = "block";
    document.getElementById("Contact").style.display = "none";
}

contact.onclick = function(event) {
    event.preventDefault();
    document.getElementById("Origin").style.display = "none";
    document.getElementById("Aboutme").style.display = "none";
    document.getElementById("Experience").style.display = "none";
    document.getElementById("Contact").style.display = "block";
}