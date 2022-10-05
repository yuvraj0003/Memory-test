// declaring the variables

var blocks = ["block1" , "block2" , "block3" , "block4" , "block5" , "block6"];


var gameBlock = []

var userClick;

var level = 0;


// capture user click
$(".btn").click(function(){
    user(this.id);
})

function user(name){

    userClick.push(name);
    new Audio("sounds/win.mp3").play();
    $(`#${name}`).addClass("pressed")
    setTimeout(function(){
         $(`#${name}`).removeClass("pressed")
    } , 100)
    userClick.unshift();
    checkAnswer(userClick.length - 1)

}

// keypress event to start the game
$(document).keypress(function(){
    nextSequence();
})

// get random block seqence
function nextSequence(){

    userClick = [];

    
    var randomNumber = Math.floor(Math.random() * 6);
    var randomBlock = blocks[randomNumber];
    gameBlock.push(randomBlock)
    $(`#${randomBlock}`).addClass("pressed")
    
    setTimeout(function(){
        $(`#${randomBlock}`).removeClass("pressed")

    } , 300)
    
}


// compare the user click with random block seqence
function checkAnswer(blocksCount){
    if(gameBlock[blocksCount] === userClick[blocksCount]){
        if(userClick.length === gameBlock.length){
            setTimeout(function(){nextSequence()} , 1000);
            level++;
            $(".heading").text(`level - ${level}`)  
        }
    }

    else{
        new Audio("sounds/loose.mp3").play();
        $(".heading").text("Game Over...")
        if(level < 2){
            $(".heading-2").text("too Low...")
        }
        else if (level > 2 && level <5){
            $(".heading-2").text("Need practice...")
        }
        else if (level > 5 && level < 10){
            $(".heading-2").text("Ok...")
        }
        else if (level > 10){
            $(".heading-2").text("Excellent...")
            
        }
        setTimeout(function(){window.location.reload(false)} , 2000);
        
    }

}


