let button = document.getElementById("explorebtn");
let menu = document.getElementById("menu");

let show = false;

button.onclick = showMenu;

function showMenu() {

    if (show === false) {
        menu.style.display = "block";
        show = true;
    } 
    else {
        menu.style.display = "none";
        show = false;
    }

}