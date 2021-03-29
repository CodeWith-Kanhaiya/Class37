//we need to keep a count of player - 4 player game
//register our players and store player info in database
class Player {
    constructor(){
        //player - name, position, distance
        this.name = null;
    }
    
    getPlayerCount(){
      var playerCountRef  = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{ //arrow functions
         playerCount = data.val();
      })
     
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount : count
      });
    }
  
   
    }
     // 