class pelota {

    constructor(){
        this.diam = random(10, 75);
        this.rad = this.diam / 2;

        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random(-5, 5);
        this.vely = random(-5, 5);

        let colores = [
            color(255, 255, 0, 120),   
            color(255, 150, 0, 120),   
            color(255, 120, 200, 120)  
        ];

        this.nuevoColor = random(colores);
    }
    
    actualizar() {
        if(this.posx > width - this.rad || this.posx < this.rad){
            this.velx *= -1;
        }

        if(this.posy > height - this.rad || this.posy < this.rad){
            this.vely *= -1;     
        }

        this.posx += this.velx;
        this.posy += this.vely;

    }

    visualizar() {
        fill(this.nuevoColor);
        stroke(255, 240);
        strokeWeight(5);
        circle(this.posx, this.posy, this.diam);
    }
}
