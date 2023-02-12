// const text = document.querySelector(".text2");


// const wtf = "We"

// let color = "#000000";
// var i = 0;

// let txt1 = "We are creating custom websites, helping with our own projects and organizing and interesting competitions. We often do events that consist of as much activity as possible for prizes! We can design and make your dream website. You don't have to know anything about programming and web designing. We will do everything for you!"

// var speed = 40;

// function typeWriter() {

//   if (i < txt1.length) {
//     text.innerHTML += txt1.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// };

// typeWriter();

// animation our team

let teamContainer = document.querySelector(".team-container");

setInterval(
    function(){
        console.log(teamContainer.getBoundingClientRect().top)
}, 1000);

teamContainer.classList.remove("team-container");
teamContainer.classList.add("team-container-out");

setInterval(function() {teamContainer.getBoundingClientRect().top <= 500 ? changeClasss() : null});

function changeClasss() {
    teamContainer.classList.add("team-container");
    teamContainer.classList.remove("team-container-out");
    clearInterval()
};

// animation about us

let aboutUs = document.querySelector(".about-us");

setInterval(
    function(){
        console.log(aboutUs.getBoundingClientRect().top)
}, 1000);

aboutUs.firstElementChild.classList.remove("box-about");
aboutUs.firstElementChild.classList.add("box-about-out");

setInterval(function() {aboutUs.getBoundingClientRect().top <= 590 ? changeClass1() : null});

function changeClass1() {
    aboutUs.firstElementChild.classList.add("box-about");
    aboutUs.firstElementChild.classList.remove("box-about-out");
};

// animation product 1

let pr1 = document.querySelector(".product1");

setInterval(
    function(){
        console.log(pr1.getBoundingClientRect().top)
}, 1000);

pr1.classList.remove("product1");
pr1.classList.add("pr1-out");

setInterval(function() {pr1.getBoundingClientRect().top <= 600 ? changeClass2() : null});

function changeClass2() {
    pr1.classList.add("product1");
    pr1.classList.remove("pr1-out");
    clearInterval();
};

// animation product 2

let pr2 = document.querySelector(".product2");

setInterval(
    function(){
        console.log(pr2.getBoundingClientRect().top)
}, 1000);

pr2.classList.remove("product2");
pr2.classList.add("pr2-out");

setInterval(function() {pr2.getBoundingClientRect().top <= 600 ? changeClass3() : null});

function changeClass3() {
    pr2.classList.add("product2");
    pr2.classList.remove("pr2-out");
    clearInterval();
};

// animation product 3

let pr3 = document.querySelector(".product3");

setInterval(
    function(){
        console.log(pr3.getBoundingClientRect().top)
}, 1000);

pr3.classList.remove("product3");
pr3.classList.add("pr3-out");

setInterval(function() {pr3.getBoundingClientRect().top <= 600 ? changeClass4() : null});

function changeClass4() {
    pr3.classList.add("product3");
    pr3.classList.remove("pr3-out");
    clearInterval();
};
