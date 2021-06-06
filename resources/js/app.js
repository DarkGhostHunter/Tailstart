import DarkMode from "./utilities/dark"
import Collapse from "bootstrap/js/src/collapse"
import Alert from "bootstrap/js/src/alert"
import Dropdown from "bootstrap/js/src/dropdown"

//
// Enable Dark Mode.
//
window.DarkMode = DarkMode.detect(); // Detect dark mode and save it as global variable.

//
// Activate all collapsible elements.
//
Array.from(document.getElementsByClassName('collapse'))
    .forEach(element => new Collapse(element, {
        toggle: false // Don't toggle the Collapsing elements automatically.
    }))

//
// Activate all alert elements.
//
Array.from(document.getElementsByClassName('alert'))
    .forEach(element => new Alert(element))

//
// Activate all dropdowns.
//
Array.from(document.getElementsByClassName('dropdown-toggle'))
    .forEach(element => new Dropdown(element))