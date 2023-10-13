/*

     Author:    Deanna M. Wilborne
    Created:    2021-02-15
    Purpose:    Run with Application.html
    History:
                2021-02-18, DMW, made modifications to support multi-page single HTML file applications.
                2021-02-15, DMW, created.
*/

"use strict"; // require that variables be declared prior to use

const BASE_PAGE_NAME = "appPage";
const VALID_PAGES = [1, 2, 3]; // using an array of valid page numbers allows for non sequential or out of order page numbering

// method to hide a page shown on the running application
function hidePage(number) {
    let pageName = BASE_PAGE_NAME + number;
    let page = document.getElementById(pageName);
    page.hidden = true;
}

// method to show a page on the running application, hide all others
function showPage(number) {
    for (let i = 0; i < VALID_PAGES.length; i++)
        if (number != VALID_PAGES[i]) hidePage(VALID_PAGES[i]);

    let pageName = BASE_PAGE_NAME + number;
    let page = document.getElementById(pageName);
    page.hidden = false;
}

function appOnload() {
    // add Application.html startup code here

}
