class Game {
    constructor(){
  
    }
  
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
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    cat = createsprites(200,displyHeight / 2 - 100,50,50)
    mouse = createsprites(displayWidth / 2 - 300,100,30,30)
    
    }
  
    play(){
        
    }
    end(){
      console.log("Game Ended");
      console.log(player.rank)
    }
  }