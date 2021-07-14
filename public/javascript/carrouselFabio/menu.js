// Capturo los elementos del DOM
let brandBar = document.getElementById("filter");
/* console.log(navBar); */
let searchBar = document.getElementById("search");

function dropMenu(){
    if(brandBar.style.display === "block") {
        brandBar.style.display = "none";
    } else {
        brandBar.style.display = "block";
        /* searchBar.style.display = "none"; */
    }
}