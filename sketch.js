const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas, backgroundImage;

var gameState = 0;

var playerCount,allPlayers;

var database;

var form, player, game;

var ground;

var bullet;

var engine, world;

var hp = 300;

var bot1,bot2,bot3,bot4;
var player1,player2,player3,player4,players;
var player1I,player2I,player3I,player4I;
var box;
var shotGun;
var m1911Gun;
var ak47;
var powerCube;

function preload(){

  // player1I = loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png");
  // player2I= loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png");
  // player3I = loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png");
  // player4I =  loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png");

  player1I = loadImage("images/man1.png");
  player2I = loadImage("images/man1.png");
  player3I = loadImage("images/man1.png");
  player4I = loadImage("images/man1.png");

  bg = loadImage("images/bgMorning.png");

  bulletImg = loadImage("images/bullet_2.png");

  box = loadImage("images/box.png");

  shotGun = loadImage("images/shotGun.png");
 
  m1911Gun = loadImage("images/m1911.png");

  ak47 = loadImage("images/ak47.png");

  powerCube = loadImage("images/powerCube.png");



}

function setup(){

  canvas = createCanvas(displayWidth,displayHeight);

  
  engine = Engine.create();
  world = engine.world;

  // bot1 = createSprite(random(100,300),displayHeight+200,50,50);
  // bot1.addImage(player1I);

  // bot1 = createSprite(random(100,400),displayHeight+200,50,50);
  // bot1.addImage(player1I);

  // bot1 = createSprite(random(100,500),displayHeight+200,50,50);
  // bot1.addImage(player1I);

  // bot1 = createSprite(random(100,300),displayHeight+200,50,50);
  // bot1.addImage(player1I);

  player1 = createSprite(200,200,50,50)
  player1.addImage(player1I);
  

  // database = firebase.database();
  // game = new Game();
  // game.getState();
  // game.start();

}


function draw(){

  background(0);

 
   
  // if(bot1.isToching(player)){
  //    hp = hp - 50;
  // }
  
//   if(playerCount===4){
//     game.update(1);

//     ground = new Ground(displayWidth/2,displayHeight+300,1200,200);

//   }

//   if(gameState===1){
//     clear();
//     game.play();
//   }
 }

 function shoot (){

  if(keyCode === 32){
    bullet.velocityX = 30;
  }

 }