const dieOne = document.querySelector("#dieOne");
const dieTwo = document.querySelector("#dieTwo");
const button = document.querySelector("#rollthedice");
const heading = document.querySelector("#heading");

button.onclick = applyStyle



const elements = [dieOne, dieTwo];

function dieRoll(){
    let die1 = Math.floor(Math.random() * 6)+1;
    let die2 = Math.floor(Math.random() * 6)+1;
    let results = [die1, die2];
    console.log(results);
    return results;
}



function applyStyle(){
    let roll = dieRoll();

    for(e in elements) {
        if(roll[e] === 1) elements[e].className = 'die-one';
        if(roll[e] === 2) elements[e].className = 'die-two';
        if(roll[e]=== 3) elements[e].className = 'die-three';
        if(roll[e]=== 4) elements[e].className = 'die-four';
        if(roll[e] === 5) elements[e].className = 'die-five';
        if(roll[e]=== 6) elements[e].className = 'die-six';
        }
    
    if(roll[0] > roll[1]) {
        heading.innerHTML = "<img src='images/crown_PNG16.png' class='crown-left'> Player 1 Wins!"
    } else if (roll[0] === roll[1]) {
        heading.textContent = "Draw!"
    } else {
        heading.innerHTML = "Player 2 Wins! <img src='images/crown_PNG16.png' class='crown-right'>"
    }
}
