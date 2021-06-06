import DarkMode from "./utilities/dark"
import Collapse from "bootstrap/js/src/collapse"

//
// Enable Dark Mode.
//
window.DarkMode = DarkMode.detect(); // Detect dark mode and save it as global variable.

//
// Activate all collapsible elements.
//
[].slice
    .call(document.getElementsByClassName('collapse'))
    .map(element => new Collapse(element, {
        toggle: false // Don't toggle the Collapsing elements automatically.
    }))