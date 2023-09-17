function setup() {
    createCanvas(750,750);
    background('#EBEBEB');
}

function draw() {
    stroke(0);
    strokeWeight(3);
    fill('#F5E5CB');
    triangle(0,200, 325,200, 0,750);            //bottom-left peach triangle
    stroke(255);
    strokeWeight(0);
    fill('#F5E5CB')
    triangle(0,0, 750,0, 500,370);              //top-middle peach triangle    
    fill(0);
    strokeWeight(0);
    triangle(347,500, 750,500, 750,750);        //bottom-right black triangle
    quad(325,197, 535,330, 400,533, 203,410);   //middle quad
    stroke(0);
    strokeWeight(3);
    fill('#F5E5CB')
    triangle(400,530, 750,0, 750,530);          //top-right peach triangle
    fill('#121212')
    triangle(0,0, 0,200, 327,200);              //top-left black triangle
    strokeWeight(0);
    fill('#F5E5CB');
    triangle(0,750, 203,410, 750,750);          //bottom-middle peach triangle
}