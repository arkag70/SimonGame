var level = 0;
var sequence = [];
var userSequence = [];
var clicks = 0;

$(document).keypress(function(){
    
    if(level === 0){
        startGame("ok");
    }
})

function startGame(ack){

    console.log("Starting game");

    updateLevel(ack);  // changes to level 1 first time

    if(ack === "ok"){

        if(level === 1){
            registerUserInput();
        }
        
        var color = blinkButton();
        sequence.push(color);
        console.log(`Comp : ${sequence}`);
    }
    else{
        level = 0;
    }

}

function registerUserInput(){

    console.log("registered user input through mouse clicks");

    $(".btn").click(handleUserInput);
}

function handleUserInput(){

    clicks++;
    userSequence.push(this.classList[1]);

    console.log(`User : ${userSequence}`);
    
    if(clicks === sequence.length){

        if(JSON.stringify(sequence) === JSON.stringify(userSequence)){
            
            console.log("match, ok"); 
            startGame("ok");
        }
        else{
            sequence = [];
            console.log("failed match, nok");
            startGame("nok");
        }
        clicks = 0;
        userSequence = [];
    }

}

function updateLevel(ack){

    if(ack === "ok"){
        level++;
        $("#level-title").text(`Level ${level}`);
    }
    else if(ack === "nok"){
        $("#level-title").text(`Game over! Incorrect sequence.`);
    }
}

function blinkButton(){
    
    var randomNum = Math.floor(Math.random() * $(".btn").length);
    var btn = $(".btn")[randomNum];
    animateBtn(btn);
    return btn.classList[1];
}

function animateBtn(btn){
    
    btn.classList.add("pressed");

    setTimeout(function(){
        btn.classList.remove("pressed");
    }, 100);
}

function recordUserInput(){

}