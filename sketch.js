var canvas;
var rect1,rect2,rect3,rect4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    rect1 = createSprite(0,580,360,30);
    rect1.shapeColor = rgb(0,0,255);

    rect2 = createSprite(295,580,200,30);
    rect2.shapeColor = rgb(255,128,0);

    rect3 = createSprite(515,580,200,30);
    rect3.shapeColor = rgb(153,0,76);

    rect4 = createSprite(740,580,220,30);
    rect4.shapeColor = rgb(0,100,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(rect1.isTouching(ball) && ball.bounceOff(rect1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(rect2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(rect3.isTouching(ball) && ball.bounceOff(rect3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(rect4.isTouching(ball) && ball.bounceOff(rect4)){
        ball.shapeColor = rgb(0,100,0);
    }

    
    drawSprites();
}


