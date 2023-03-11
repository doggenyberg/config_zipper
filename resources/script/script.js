/* Functions */

function switchPage(currPage, nextPage)
{   
    // prevent "bug"
    if (currPage == nextPage) {
        return;
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
    }, 500);

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
            return "410px";
        case pageHelp:
            return "755px";
    }
}

/* Functions upload */

function saveFiles(input) {
    const files = input.files;
    const zip = new JSZip();
    
    if (files.length === 0) {
        animationShake(importBtnSave);
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = () => {
            zip.file(file.name, reader.result, { binary: true });
        };
        reader.readAsArrayBuffer(file);
    }

    setTimeout(() => {
        zip.generateAsync({ type: "blob" }).then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "CSGO-config.zip";
            link.click();
        })
    }, 1000);
}

// Functions animations

function animationShake(button) {
    button.classList.add("animation-shake");
    setTimeout(function () {
        button.classList.remove("animation-shake");
    }, 300);
}

/* ! Import HTML elements */

// Pages
const pageHome = document.getElementById("home-page");
const pageImport = document.getElementById("import-page");
const pageUpload = document.getElementById("upload-page");
const pageHelp = document.getElementById("help-page");

// Buttons
const navBtnHome = document.getElementById("nav-home"); // nav "Home"
const navBtnImport = document.getElementById("nav-import"); // nav "Import"
const navBtnUpload = document.getElementById("nav-upload"); // nav "Upload"
const navBtnHelp = document.getElementById("nav-help"); // nav "Help"

const homeBtnNext = document.getElementById("home-next"); // homepage "Next"

const importBtnSave = document.getElementById("save"); // importpage "Save"

// Inputs
const uploadInput = document.getElementById("import");

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

importBtnSave.addEventListener("click", () => saveFiles(uploadInput));
