import DarkMode from "./utilities/dark"
import Collapse from "bootstrap/js/src/collapse"
import Alert from "bootstrap/js/src/alert"
import Dropdown from "bootstrap/js/src/dropdown"
import Modal from "bootstrap/js/src/modal"
import Tooltip from "bootstrap/js/src/tooltip"

//
// Enable Dark Mode.
//
window.DarkMode = DarkMode.detect(); // Detect dark mode and save it as global variable.

//
// Activate all collapsable.
//
Array.from(document.getElementsByClassName('collapse'))
    .map(element => new Collapse(element, {
        toggle: false // Don't toggle the Collapsing elements automatically.
    }))

//
// Activate all alerts.
//
Array.from(document.getElementsByClassName('alert'))
    .map(element => new Alert(element))

//
// Activate all dropdowns.
//
Array.from(document.getElementsByClassName('dropdown-toggle'))
    .map(element => new Dropdown(element))

//
// Activate all modals.
//
Array.from(document.getElementsByClassName('modal'))
    .filter(element => element.id) // Filter those who have an ID.
    .map(element => new Modal(element))

//
// Activate all tooltips.
//
Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    .map(element => {
        let tooltip = new Tooltip(element)

        if (element.hasAttribute('data-bs-show')) {
            tooltip.show()
        }

        return tooltip
    })