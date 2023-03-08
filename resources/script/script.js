/* Functions */

function switchPage(currPage, nextPage)
{   
    // prevent "bug"
    if (currPage == nextPage) {
        return
    }

    // remove all the animation-classes from the pages
    currPage.classList.remove("animation-fade-out");
    nextPage.classList.remove("animation-fade-in");
    nextPage.classList.remove("animation-fade-out");
    currPage.classList.remove("animation-fade-in");

    // fade out current page
    currPage.classList.add("animation-fade-out");
    mainContainer.style.height = findHeight(nextPage); 

    // fade in next page
    setTimeout(function() {
        currPage.style.display = "none";
        
        nextPage.classList.add("animation-fade-in");
        currPage.classList.remove("animation-fade-out");
        nextPage.style.display = "flex";
    }, 300);

    // save value for current page
    page = nextPage;
}

function findHeight(page) {
    switch (page) {
        case pageHome:
            return "634px";
        case pageImport:
            return "381px";
        case pageUpload:
            return "410px"
    }
}

/* ! Import HTML elements */

// Pages
const pageHome = document.getElementById("home-page");
const pageImport = document.getElementById("import-page");
const pageUpload = document.getElementById("upload-page");
const pageHelp = document.getElementById("help-page");

// Buttons
const navBtnHome = document.getElementById("nav-home");
const navBtnImport = document.getElementById("nav-import");
const navBtnUpload = document.getElementById("nav-upload");
const navBtnHelp = document.getElementById("nav-help");
const homeBtnNext = document.getElementById("home-next");

// Main container
const mainContainer = document.getElementById("main-container");

// Page switching
let page = pageHome;

/* ! Event listeners */
navBtnImport.addEventListener("click", () => switchPage(page, pageImport));
navBtnHome.addEventListener("click", () => switchPage(page, pageHome));
navBtnUpload.addEventListener("click", () => switchPage(page, pageUpload));
navBtnHelp.addEventListener("click", () => switchPage(page, pageHelp));
homeBtnNext.addEventListener("click", () => switchPage(page, pageImport));
