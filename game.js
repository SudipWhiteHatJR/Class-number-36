class Game{
    constructor(){

    }

    getGameState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameStateCode = data.val()
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if (gameStateCode === 0){
            player=new Player()
            player.getCount()
            form= new Form()
            form.display()
        }
    }
}
