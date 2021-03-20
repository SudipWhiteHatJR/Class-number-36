var database;
var form,game,player
var gameStateCode=0
var playerCountCode



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game()
  game.getGameState()
  game.start()

  
}

function draw(){
  background("white");
  
  
  
}

