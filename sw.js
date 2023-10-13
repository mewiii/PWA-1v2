/*

     Author:    Deanna M. Wilborne
    Created:    2021-02-13
    Purpose:    A service worker based on the textbook and updated to support our application framework
    History:
                2021-03-19, DMW, updated to use Bootstrap v5 beta 2
                2021-02-27, DMW, added "use strict"
                2021-02-15, DMW, updated to include appropriate files for caching
                2021-02-13, DMW, created.
*/

"use strict";

// service worker version number
const SW_VERSION = 1;
// the root name for our cache
const CACHE_ROOT = 'pwa-learn-cache'
// generates a custom cache name per service worker version
const CACHE_NAME = `${CACHE_ROOT}-v${SW_VERSION}`;

// 2023-10-13, DMW, updated jquery to 3.7.1
// a list of URLs to cache locally for the PWA
const URL_LIST = [
    './application.json',
    './Application.html',
    './About.html',
    './Contact.html',
    './check_sw.js',
    './sw.js',
    './Content/Site.css',
    './Scripts/Site-Navigation.js',
    './Scripts/Site.js',
    './Scripts/Application.js',
    './bootstrap/css/bootstrap.min.css',
    './Scripts/jquery-3.7.1.min.js',
    // './Scripts/jquery-3.5.1.min.js',
    './Scripts/WebForms/WebForms.js',
    './Scripts/WebForms/WebUIValidation.js',
    './Scripts/WebForms/MenuStandards.js',
    './Scripts/WebForms/GridView.js',
    './Scripts/WebForms/DetailsView.js',
    './Scripts/WebForms/TreeView.js',
    './Scripts/WebForms/WebParts.js',
    './Scripts/WebForms/Focus.js',
    './bootstrap/js/bootstrap.min.js',
    './Scripts/modernizr-2.8.3.js'
];

// based on secrvice worker from https://airhorner.com/sw.js
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URL_LIST)
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
