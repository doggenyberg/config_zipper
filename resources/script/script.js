/* Functions */

function switchPage(currPage, nextPage)
{   
    currPage.classList.add("animation-fade")
    currPage.style.display = "none";
    nextPage.style.display = "flex";
}

/* ! Import HTML elements */

// Pages
const pageHome = document.getElementById("home-page");
const pageImport = document.getElementById("import-page");

// Buttons
const navBtnHome = document.getElementById("nav-home");
const navBtnImport = document.getElementById("nav-import");

/* ! Event listeners */
navBtnImport.addEventListener("click", () => switchPage(pageHome, pageImport));
