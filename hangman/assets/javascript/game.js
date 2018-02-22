    var starwords = ['vader','luke',"leia","han","rei","kylo"]
    var wins = 0;
    var losses = 0;
    var wrongletter = [];
    var guessremain = 4;
    var spaces = [];
    var playerguesses = [];
    var randomword;

    function gamestart(){
        
       randomword = starwords[Math.floor(Math.random() * starwords.length)];
       console.log(randomword);

        for(var i = 0; i < randomword.length; i++) {
            console.log(i);
            spaces.push('_');
        }
        //console.log(spaces);
        document.getElementById("wordguess").textContent = spaces.join(" ");
        document.getElementById("remainguess").textContent = guessremain;



        wrongletter = [];
        guessremain = 4;

    }

    document.onkeyup = function(event){
        playerguesses = event.key;
        console.log(playerguesses)

        if(randomword.indexOf(playerguesses) > -1){
            console.log('yes');
            for(var i = 0; i < randomword.length; i++){
                     
            }
        }else{
            wrongletter.push(playerguesses);
            console.log(wrongletter);
            guessremain--;
            console.log(guessremain);
        }
    }


    gamestart();