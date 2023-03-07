/* Functions */

function switchPage(currPage, nextPage)
{   
    currPage.classList.add("animation-fade-out");
    mainContainer.style.height = findHeight(nextPage); 

    setTimeout(function() {
        currPage.style.display = "none";
        
        nextPage.classList.add("animation-fade-in");
        nextPage.style.display = "flex";
        currPage.classList.remove("animation-fade-out");
        nextPage.classList.remove("animation-fade-in");
    }, 300);
    page = nextPage;
}

function findHeight(page) {
    switch (page) {
        case pageHome:
            return "634px";
            break;
        case pageImport:
            return "381px";
            break;
    }
}

/* ! Import HTML elements */

// Pages
const pageHome = document.getElementById("home-page");
const pageImport = document.getElementById("import-page");

// Buttons
const navBtnHome = document.getElementById("nav-home");
const navBtnImport = document.getElementById("nav-import");

// Main container
const mainContainer = document.getElementById("main-container");

// Page switching
let page = pageHome;

/* ! Event listeners */
navBtnImport.addEventListener("click", () => switchPage(page, pageImport));
navBtnHome.addEventListener("click", () => switchPage(page, pageHome));
