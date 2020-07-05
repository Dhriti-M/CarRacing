class Game{
    constructor(){

    }

    getGamestate(){
        //gamestste refer 
        var ref = database.ref("gameState");
        ref.on("value",function(data){
            gamestate = data.val();
        })
    }

    updateGameState(state){
    var ref = database.ref('/');
    ref.update({
        gameState:state
    })
    }

    start(){
        if (gamestate === 0){
            player=new Player()
            player.getPlayerCount();
            form=new Form();
            form.display();
        }
    }
}