class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",function (data){
            playerCountCode = data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })

    }
    updateName(name){
        var nameRef="player"+playerCountCode
        database.ref(nameRef).set({
            name:name
        })
    }
}