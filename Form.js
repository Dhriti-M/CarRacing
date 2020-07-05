class Form{
    constructor(){

    }

    display(){
        var Title = createElement('h1');
        Title.html("CAR RACING");
        Title.position(130,0);

        var inputbox = createInput("NAME");
        inputbox.position(130,160);

        var button = createButton("SAVE");
        button.position(250,200);

        var greet = createElement('h3');
        
        button.mousePressed(function(){
            inputbox.hide();
            button.hide();
            var name = inputbox.value();
            playercount=playercount+1;
            player.updatePlayerCount(playercount);
            player.updatePlayerName(name);
            greet.html("Welcome"+name);
            greet.position(130,160);
        })
    }
}