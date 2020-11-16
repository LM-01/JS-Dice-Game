const dieOne = document.querySelector("#dieOne");
const dieTwo = document.querySelector("#dieTwo");
const button = document.querySelector("#rollthedice");

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
}

