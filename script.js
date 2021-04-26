

function dropdownMenu() {
    var dropdownIcon = document.getElementById("dropdownClick");
    if (dropdownIcon.className === "topnav") {
        dropdownIcon.className += " responsive";
        /*change topnav to topnav.responsive */
    } else {
        dropdownIcon.className = "topnav";
    }
}