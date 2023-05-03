var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
const score = document.getElementById('score');


function jump()
{
	if (character.classList=='')
	{
		character.classList.add("animate");
	}
	
	setTimeout(function(){
        character.classList.remove("animate");
    },300);
	
}

var checkDead = setInterval(function()
{
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); 
    if(blockLeft<20 && characterTop>=130){
      character.style.animation = 'none';
		alert('GameOver');
		character.style.animation = 'jump 0.4s linear';
            score++;
	}
	

}, 10);