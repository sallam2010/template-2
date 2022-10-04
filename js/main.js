// check if thires local storage color optaion
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors)

    // remove class active from all color list
    document.querySelectorAll(".Color-list li").forEach(element => {

        element.classList.remove("active")

        // Add class active on elment with date color
        if (element.dataset.color === mainColors) {

            element.classList.add("active")
        }
    })

}

// Random background Option
let backgroundOption = true;

// Variable to control the interval
let backgroundInterval;

// check if there is local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option")

// check if localstorage is not null
if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === 'true') {

        backgroundOption = true

    } else {

        backgroundOption = false
    }

    document.querySelectorAll(".rondom-background span").forEach(element => {

        element.classList.remove("active")
    })

    if (backgroundLocalItem === true) {

        document.querySelector(".rondom-background .yes").classList.add("active")
    } else {
        document.querySelector(".rondom-background .no").classList.add("active")

    }
}

// Togle spin class on Icon
document.querySelector(".Setting-box .fa-gear").onclick = function() {

    this.classList.toggle("fa-spin");
    // Toggle class open 
    document.querySelector(".Setting-box").classList.toggle("open")
}

// Switch Color
let colorLi = document.querySelectorAll(".Color-list li")

colorLi.forEach(li => {

        li.addEventListener("click", (e) => {

            // set color on root
            document.documentElement.style.setProperty('--main-color', e.target.dataset.color)

            //set color on local storage
            localStorage.setItem("color-option", e.target.dataset.color)

            handelActive(e)

        })
    }) /////////////////////////////////////////

// Switch RANDOM BACKDROUND COLOR

let RandomBackgrounds = document.querySelectorAll(".rondom-background span")

RandomBackgrounds.forEach(span => {

        span.addEventListener("click", (e) => {

            handelActive(e)

            if (e.target.dataset.background === 'yes') {
                backgroundOption = true;
                randomizeImge()

                localStorage.setItem("background_option", true)

            } else {
                backgroundOption = false;
                clearInterval(backgroundInterval)

                localStorage.setItem("background_option", false)


            }

        })
    }) ////////////////////////////////////////

let landing = document.querySelector(".Landing");

// Get Arry for Img
let imgArry = ["4635743.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "1.jpeg"]

// change img background  url
landing.style.backgroundImage = 'url("img/3.jpeg")'

//function to randmiz option
function randomizeImge() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            // Get random number
            let randomNumber = Math.floor(Math.random() * imgArry.length)

            // change img background  url
            landing.style.backgroundImage = 'url("img/' + imgArry[randomNumber] + ' ")'

        }, 1000)
    }
}
randomizeImge()

// Select skills selector
let progressSpans = document.querySelectorAll(".skill-progress span")
let ourSkills = document.querySelector(".skills")

window.onscroll = function() {

    if (window.scrollY >= ourSkills.offsetTop - 250) {

        progressSpans.forEach((span) => {
            span.style.width = span.dataset.progress
        })
    }
}

// creat popup with img
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {

    img.addEventListener("click", (e) => {

        // creat overylay element
        let overlay = document.createElement('div')

        overlay.className = 'popup-overlay'

        document.body.appendChild(overlay)

        // creat popup box
        let popupBox = document.createElement("div")

        popupBox.className = 'popup-box'

        if (img.alt !== null) {

            let imgHeading = document.createElement("h3")

            let imgText = document.createTextNode(img.alt)

            imgHeading.appendChild(imgText)

            popupBox.appendChild(imgHeading)
        }

        let popupImg = document.createElement("img")

        popupImg.src = img.src

        popupBox.appendChild(popupImg)

        document.body.appendChild(popupBox)

        // creat close span
        let colseButton = document.createElement("span")

        let colseButtonSpan = document.createTextNode("X")

        colseButton.appendChild(colseButtonSpan)

        colseButton.className = 'close-button'

        popupBox.appendChild(colseButton)
    })
})

// close popup
document.addEventListener("click", function(e) {

    if (e.target.className == 'close-button') {

        e.target.parentElement.remove()

        document.querySelector(".popup-overlay").remove()
    }
})

// Start Nav Bullets
// select all bullets
let allBullets = document.querySelectorAll(".nav-bulltes .bullte");


// Start Linkes
// select linkes
let linkes = document.querySelectorAll(".Links a");

function secrolTo(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            })
        })
    })
}
secrolTo(allBullets)
secrolTo(linkes)

// handel active
function handelActive(e) {

    // remove class active from all span
    e.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active")
    })

    // add active class 
    e.target.classList.add("active")
} //////

// billtes option (html)
let bulltesSpan = document.querySelectorAll(".bullets-option span")
let bulltesContainer = document.querySelector(".nav-bulltes")
let bulltesLocalItemm = localStorage.getItem("bullets_option")

if (bulltesLocalItemm !== null) {

    bulltesSpan.forEach(span => {

        span.classList.remove("active")
    })

    if (bulltesLocalItemm === 'block') {

        bulltesContainer.style.display = 'block'
        document.querySelector(".bullets-option .yes").classList.add("active")

    } else {

        bulltesContainer.style.display = 'none'
        document.querySelector(".bullets-option .no").classList.add("active")


    }

}


bulltesSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulltesContainer.style.display = 'block'

            localStorage.setItem("bullets_option", 'block')
        } else {

            bulltesContainer.style.display = 'none'
            localStorage.setItem("bullets_option", 'none')


        }
        handelActive(e)
    })
})

//  resst button
document.querySelector(".reset-options").onclick = function() {

        localStorage.clear()

        window.location.reload()
    } ////

//Togle Menue
let toggleBtn = document.querySelector(".toggle-menu")
let tLinkes = document.querySelector(".Links")

toggleBtn.onclick = function(e) {

        // stop propragetion
        e.stopPropagation()

        this.classList.toggle("menu-active")
        tLinkes.classList.toggle("open")
    } //

// click anywhere outside menu and toggle button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinkes) {

        //check if menu open
        if (tLinkes.classList.contains("open")) {

            toggleBtn.classList.toggle("menu-active")
            tLinkes.classList.toggle("open")
        }
    }
})

// stop proparation on menu
tLinkes.onclick = function(e) {

    e.stopPropagation()
}