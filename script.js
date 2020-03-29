const bioButton = document.querySelector("#toggleBtn");
const content = document.querySelector(".hide");

bioButton.addEventListener("click", function() {
    content.classList.toggle("show");
});




//image Carousel javascript.
var i = 0;
var images = [];
var time = 3000;

images[0] = './images/virtualPetShelter.jpg';
images[1] = './images/fortuneTeller.jpg'
images[2] = './images/GuessingGame.jpg';
images[3] = './images/VPACode.jpg';
images[4] = './images/GuessingGameCode.jpg';

function changeImg() {
    document.getElementById('slide').src = images[i];

    let carousels = document.getElementsByClassName("image-carousel");

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

//call the function changeImg().
window.onload = changeImg;




/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



var coll = document.getElementsByClassName("collapsible");
var i;


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {

            content.style.display = "block";

        }

    });

}