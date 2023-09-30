// const searchIcon = document.getElementById("search-icon");
// const searchInput = document.getElementById("search-input");

// function initializeSearchBarBehavior(searchIcon, searchInput) {
//     searchIcon.addEventListener("click", () => {
//         if (searchInput.style.width === "100%") {
//             searchInput.style.width = "0";
//             searchInput.style.padding = "0";
//         } else {
//             searchInput.style.width = "100%";
//             searchInput.style.padding = "5px";
//             searchInput.focus(); 
//         }
//     });
// }

// initializeSearchBarBehavior(searchIcon, searchInput);



const searchIconElement = document.getElementById("search-icon");
const searchInputElement = document.getElementById("search-input");

function initializeSearchBarBehavior(searchIcon, searchInput) {
    searchIconElement.addEventListener("click", () => {
        if (searchInputElement.style.width === "100%") {
            searchInputElement.style.width = "0";
            searchInputElement.style.padding = "0";
        } else {
            searchInputElement.style.width = "100%";
            searchInputElement.style.padding = "5px";
            searchInputElement.focus(); 
        }
    });
}

initializeSearchBarBehavior(searchIconElement, searchInputElement);
