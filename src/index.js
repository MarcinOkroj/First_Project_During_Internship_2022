// import { bro } from './bro';

// console.log(bro('Duuuuuuude'))

// Accordion
// function accordion(className) {
//     let acc = document.getElementsByClassName(className);
//     for (let i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function () {
//             this.classList.toggle("active");

//             let panel = this.nextElementSibling;
//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//             } else {
//                 panel.style.maxHeight = panel.scrollHeight + "px";
//             }

//         }

//         );
//     }
// }

//  ---NEW ACCORDION----


function accordion(accBtn, panelDiv) {
    let acc = document.getElementsByClassName(accBtn);
    let panel = document.getElementsByClassName(panelDiv);
    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            let setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove');

            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }
}



function accordionSidePanel(className) {
    let acc = document.getElementsByClassName(className);
    // let chevronChild = document.getElementsByClassName("fa-solid fa-chevron-right");
    let chevronDown = document.createElement("i")
    chevronDown.className = "fa-solid fa-chevron-down";
    let chevronRight = document.createElement("i")
    chevronRight.className = "fa-solid fa-chevron-right";

    for (const element of acc) {
        element.addEventListener("click", function () {
            let panel = this.parentElement.nextElementSibling;
            console.log(panel);
            // removeAllChildNodes(this);
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.style.backgroundColor = '#fff';
                this.style.color = "black"
                // this.appendChild(chevronRight);
                this.querySelector('i').classList.remove('fa-chevron-down');
                this.querySelector('i').classList.add('fa-chevron-right');
                this.parentElement.style.background = '#fff';
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            
                this.style.backgroundColor = '#0f535f';
                this.style.color = "white";
                // this.appendChild(chevronDown);
                this.parentElement.style.background = 'rgb(245, 245, 245)';
                this.querySelector('i').classList.add('fa-chevron-down');
                this.querySelector('i').classList.remove('fa-chevron-right');
            }

        }

        );
    }
    
}


window.accordionSidePanel = accordionSidePanel; //I know thats wrong way to do but it's the only way it works
window.accordionSidePanel("side-panel__column--btn")
window.accordion = accordion;
window.accordion("procedures__column--links", "panel")


    //---Nav Sidepanel Mobiles---
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    // div to make screen darker
    let outside = document.getElementById("outside__sidepanel");
    outside.style.background = "black";
    outside.style.opacity = "0.8";
    outside.style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    let outside = document.getElementById("outside__sidepanel");
    outside.style.background = "white";
    outside.style.opacity = "1";
    outside.style.width = "0";
}

window.openNav = openNav;
window.closeNav = closeNav;


// open btn
const openTarget = document.querySelector('.openbtn')

document.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(openTarget)

    if (withinBoundaries) {
        return window.openNav()
    }
})

const closeTarget = document.querySelector('#mySidepanel')


//close burger menu if clicked outside menu
document.addEventListener('click', (event) => {
    const withinBoundariesClose = event.composedPath().includes(closeTarget)//inside sidepanel
    const withinBoundariesOpen = event.composedPath().includes(openTarget)//inside menu btn

    if (!withinBoundariesClose && !withinBoundariesOpen) {//if outside menu btn && outside sidepanel
        window.closeNav()
    }
});



//  ---Contact Us From---

// show a message with a type of the input
function showMessage(input, message, type) {
    // get the small element and set the message
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    msg.style.color = "red";
    // update the class for the input
    input.className = type ? "success contact__email--input" : "error contact__email--input";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    // check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // validate email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}

const form = document.querySelector("#contact-us");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();

    // validate the form
    let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    // if valid, submit the form.
    if (nameValid && emailValid) {
        console.log(form.elements[0].value);
        console.log(form.elements[1].value);
        console.log(form.elements[2].value);
    }
});




    //---sticky navbar---
const nav = document.querySelector('#header__lowerbar--id');
let navTop = nav.offsetTop;

function fixedNav() {
    if (window.scrollY >= 40) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixedNav);
