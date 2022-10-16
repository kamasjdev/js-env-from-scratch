require("@babel/register"); // translate es6+ js syntax
var jsdom = require("jsdom"); // to create virtual html DOM

const jsdm = new jsdom.JSDOM('<html><head></head><body></body></html>');
const window = jsdm.window;

if(Object.keys(window).length === 0) {
    // this hapens if contextify, one of jsdom's dependencies doesn't install correctly
    // (it installs different code depending on the OS, so it cannot get checked in.);
    throw "jsdom failed to create a usable environment, try uninstalling and reinstalling it";
}

global.window = window;

global.document = window.document;
