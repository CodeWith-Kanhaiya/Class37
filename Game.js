class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();//create a player object
      var playerCountRef = await database.ref('playerCount').once("value");//once get the player count
      if(playerCountRef.exists){
        playerCount = playerCountRef.val();
        player.getPlayerCount();
      }
      form = new Form();//form is an object of class Form
      form.display();
    }
  }

  Play(){
    form.hide();
    text("Game Begins", 150,200);//text("content" , xpos, ypos)
  }

}
