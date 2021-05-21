/*
The Javascript file for the Ambulance Animation Assignment.
Created by Jalaluddin Qureshi for the Digitial Design course (HTTP5104).
Humber College, Toronto, Canada (Fall 2020).
*/

window.onload = function(){
    
    // ***************************************** //
    //Fetches the elements which will be animated. //
    var siren = document.getElementById("siren");
    var lightFront = document.getElementById("light-front");
    var lightBack = document.getElementById("light-back");
    var ambulance = document.getElementById("ambulance-object");
    var wheel = document.getElementsByClassName("wheel");
    
    // ***************************************** //
    //Fetches the audio element //
    var audio = document.getElementById("audio"); 
    
    // ***************************************** //
    // Fetches the various button elements  //
    var sirenOn = document.getElementById("siren-on");
    var sirenOff = document.getElementById("siren-off");
    //
    var stop = document.getElementById("stop");
    var move = document.getElementById("move");
    //
    var speedDefault = document.getElementById("speed-default");
    var speedFast = document.getElementById("speed-fast");
    
    // ***************************************** //
    // Listeners //
    sirenOn.onclick=animateSiren;
    sirenOff.onclick=turnOffSiren;
    
    stop.onclick=function() {
        ambulance.style.animationPlayState="paused";
        wheel[0].style.animationPlayState="paused";
        wheel[1].style.animationPlayState="paused";
    }
    move.onclick=function() {
        ambulance.style.animationPlayState="running";
        wheel[0].style.animationPlayState="running";
        wheel[1].style.animationPlayState="running";
    }
    
    speedDefault.onclick=function() {
        ambulance.style.animationDuration="12s";
        wheel[0].style.animationDuration="4s";
        wheel[1].style.animationDuration="4s";
    }
    speedFast.onclick=function() {
        ambulance.style.animationDuration="5s";
        wheel[0].style.animationDuration="2s";
        wheel[1].style.animationDuration="2s";
    }
    
    // ***************************************** //
    // FUNCTIONS //
    // ***************************************** //
    //turns on the siren and audio.
    function animateSiren() {
        siren.style.animationName = "animateSiren";  
        lightFront.style.animationName = "light-on";
        lightBack.style.animationName = "light-on";
        audio.play();
        audio.loop= true;
    }
    
    //turns off the siren and audio.
    function turnOffSiren() {
        siren.style.animationName = "doesnothing";  
        lightFront.style.animationName = "doesnothing";
        lightBack.style.animationName = "doesnothing";
        audio.pause();
    }
    

    
    
    
}