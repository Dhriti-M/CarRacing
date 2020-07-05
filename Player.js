class Player{
 constructor(){

 }

 getPlayerCount(){
     var ref = database.ref("PlayerCount");
     ref.on("value",function(data){
         playercount = data.val();
     })

 }

 updatePlayerCount(count){
      var ref =database.ref('/');
      ref.update({
          playerCount:count
      })
 }

 updatePlayerName(name){
     var playerindex = "Player"+playercount;
     var ref = database.ref(playerindex);
      ref.set({
          Name: name 
      })
 }
}