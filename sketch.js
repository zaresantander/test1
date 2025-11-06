const NP = 500;
let pelotas = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    for(let i = 0; i < NP; i++){
        let nuevapelota = new pelota();
        pelotas[i] = nuevapelota;
    }
    
}

function draw() {
    background(150);

    for(let i = 0; i < NP; i++){
        pelotas[i].actualizar();
        pelotas[i].visualizar();
    }
}
