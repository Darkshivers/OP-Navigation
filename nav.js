// ==UserScript==
// @name         Nav
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cms.oak-partnership.co.uk/orders/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var btn = document.createElement("BUTTON") // Create a <button> element
var t = document.createTextNode("<<");
btn.id = "back"
btn.style = "top:0;right:0;position:fixed;z-index: 9999"
btn.appendChild(t);
document.body.appendChild(btn);

var btn2 = document.createElement("BUTTON")
var t2 = document.createTextNode(">>>");
btn2.id = "forward" // Create a text node
btn2.style = "top:0;right:-5;position:fixed;z-index: 9999"
btn2.appendChild(t2);
document.body.appendChild(btn2);


document.getElementById("back").onclick = function() {
var cake = window.location.href
console.log(cake)
var accode = cake.replace(/\D/g,'');
console.log(accode)
var accint = parseInt(accode) + 1
console.log(accint)
var url = "http://cms.oak-partnership.co.uk/orders/" +accint
console.log(url)
window.location.href = url

}


document.getElementById("forward").onclick = function() {

var cake = window.location.href
console.log(cake)
var accode = cake.replace(/\D/g,'');
console.log(accode)
var accint = parseInt(accode) - 1
console.log(accint)
var url = "http://cms.oak-partnership.co.uk/orders/" +accint
console.log(url)
window.location.href = url
}



})();
