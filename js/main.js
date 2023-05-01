// display mobile drop out menu 
const menuBtn = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-dropdown");
menuBtn.addEventListener("click", displayMobileMenu);
let mobileMenuEnabled = false;

function displayMobileMenu(){

    if(mobileMenuEnabled === true){

        mobileMenu.style.display = "none";
        mobileMenuEnabled = false;
    }
    else{
        mobileMenu.style.display = "block";
        mobileMenuEnabled = true;
    }
}

// close the menu after linking the menu buttons 
function closeMobileMenu(){
    mobileMenu.style.display = "none";
    mobileMenuEnabled = false;
}

// slide show hero image 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("mySlides");
  
  // change the image
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  activeBtn(n);
}

// active slide show button
function activeBtn(n){
  const slideBtn1 = document.getElementById("slideBtn1");
  const slideBtn2 = document.getElementById("slideBtn2");
  const slideBtn3 = document.getElementById("slideBtn3");

  if (n===1){
    slideBtn1.classList.add("active");
    slideBtn1.classList.remove("not-active");
    slideBtn2.classList.add("not-active");
    slideBtn2.classList.remove("active");
    slideBtn3.classList.add("not-active");
    slideBtn3.classList.remove("active");
}
else if (n===2){
    slideBtn2.classList.add("active");
    slideBtn2.classList.remove("not-active");
    slideBtn1.classList.add("not-active");
    slideBtn1.classList.remove("active");
    slideBtn3.classList.remove("active");
    slideBtn3.classList.add("not-active");
}
else if (n===3){
    slideBtn3.classList.add("active");
    slideBtn3.classList.remove("not-active");
    slideBtn1.classList.remove("active");
    slideBtn1.classList.add("not-active");
    slideBtn2.classList.remove("active");
    slideBtn2.classList.add("not-active");
  }
}

// auto change the hero image every 5 seconds

var slideIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
  activeBtn(slideIndex);
}

