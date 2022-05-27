if (localStorage.getItem("user") != "undefined" && localStorage.getItem("user") != null){
  document.getElementById("main-block__button__music").innerHTML = localStorage.getItem("user");
  document.getElementById("main-block__button__music").href="AdminPanel.html";
}

$(document).ready(function() {
$("#laka").click(function(){
    alert("Thank you for subscribing to our newsletter!");
  });

$("#laka").mouseenter(function(){
    $("#laka").css("background-color", "#BE1010");
  });
  $("#laka").mouseleave(function(){
    $("#laka").css("background-color", "#ff7b47");
  });

})


document.head.insertAdjacentHTML('beforeend', `<link rel="icon" href="img/booking/10.png">`);

var backgroundSong = document.getElementById("main-block__button__music");
backgroundSong.insertAdjacentHTML('afterend', `<audio src="clickSound.mp3" id="backgroundSong"></audio>`);



function backgroundMusic(){
  var btn = document.getElementById("button")
  var backgroundSong= document.getElementById("backgroundSong");
    if (backgroundSong.paused){
      btn = backgroundSong.play();
}
    else{
      backgroundSong.pause();
}
}



function scal1(){
  document.querySelector('#services__column_1').style.transform = "scale(1.1)";
  document.querySelector("#services__column_1").style.transitionDuration = "0.2s";}

function scalNone1(){
  document.querySelector('#services__column_1').style.transform = "none";}


function scal2(){
  document.querySelector('#services__column_2').style.transform = "scale(1.1)";
  document.querySelector("#services__column_2").style.transitionDuration = "0.2s";}

function scalNone2(){
  document.querySelector('#services__column_2').style.transform = "none";}


function scal3(){
  document.querySelector('#services__column_3').style.transform = "scale(1.1)";
  document.querySelector("#services__column_3").style.transitionDuration = "0.2s";}

function scalNone3(){
  document.querySelector('#services__column_3').style.transform = "none";}



function scall1(){
  document.querySelector('#advantages__item_1').style.transform = "scale(1.1)";
  document.querySelector("#advantages__text_1").innerHTML = "In Healtcare Market";
  document.querySelector("#advantages__item_1").style.transitionDuration = "0.2s";}

function scallNone1(){
  document.querySelector('#advantages__item_1').style.transform = "none";
  document.querySelector("#advantages__text_1").innerHTML = " ";}


function scall2(){
  document.querySelector('#advantages__item_2').style.transform = "scale(1.1)";
  document.querySelector("#advantages__text_2").innerHTML = "Branch Offices";
  document.querySelector("#advantages__item_2").style.transitionDuration = "0.2s";}

function scallNone2(){
  document.querySelector('#advantages__item_2').style.transform = "none";
  document.querySelector("#advantages__text_2").innerHTML = " ";}


function scall3(){
  document.querySelector('#advantages__item_3').style.transform = "scale(1.1)";
  document.querySelector("#advantages__text_3").innerHTML = "Positive Reviews";
  document.querySelector("#advantages__item_3").style.transitionDuration = "0.2s";}

function scallNone3(){
  document.querySelector('#advantages__item_3').style.transform = "none";
  document.querySelector("#advantages__text_3").innerHTML = " ";}


function scall4(){
  document.querySelector('#advantages__item_4').style.transform = "scale(1.1)";
  document.querySelector("#advantages__text_4").innerHTML = "Qualified Doctors";
  document.querySelector("#advantages__item_4").style.transitionDuration = "0.2s";}

function scallNone4(){
  document.querySelector('#advantages__item_4').style.transform = "none";
  document.querySelector("#advantages__text_4").innerHTML = " ";}



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

var options = {
  threshold: [0.5] };
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.subscribe__body');

for (var elm of elements) {
  observer.observe(elm);
}







