/*

     Author:   Deanna M. Wilborne
    Created:   2021-02-13
    Purpose:   Provide for common application navigation
    History:
                2021-02-13, DMW, initial version
*/

"use strict";

// this method creates the navigation bar and menu
function __LoadNavigationMenu(appName) {
    let navMenu = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="Application.html">` + appName + `</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Contact.html">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="About.html">About</a>
            </li>
            <!-- this is just a simple link item
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            -->
            <!-- this shows how to create a drop down menu selector
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            -->
            <!-- this shows how to create a link that is disabled
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            -->
            <!-- this shows how to create a search box, but doesn't show the required code/server requirements
            </ul>
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            -->
        </div>
        </div>
        </nav>
    `;

    document.getElementById("divNavigation").innerHTML = navMenu;
}

// this method creates the page footer
function __LoadFooter(copyRight) {
    let footerHTML = `
        <hr />
        <footer style="text-align: center;">
            <p>&copy; ` + (new Date()).getFullYear() + ` - ` + copyRight + `</p>
        </footer>
    `;

    document.getElementById("divFooter").innerHTML = footerHTML;
}

// this method allows you to set programmer defined values
function __SiteNavigation(pageTitle) {
    let appName = 'myApp'; // change this line to set your application name
    let copyRight = 'My Copyright'; // change this line to set your application copyright

    // do not modify the following code
    let titlePrefix = "";
    if (pageTitle != "") {
        titlePrefix = pageTitle + " - "
    }
    let fullTitle = titlePrefix + appName;
    document.getElementById("appTitle").innerHTML = fullTitle;
    __LoadNavigationMenu(appName);
    __LoadFooter(copyRight);
}