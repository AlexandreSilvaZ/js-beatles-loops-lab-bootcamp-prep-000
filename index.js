function theBeatlesPlay(players, instruments) {
    var allPlayers = []; // Create a variable with an empty array.
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]); // The first time through the loop, it should create a string using the first index of the musicians array and the first index of the instruments array:
    }
    return allPlayers;
}


function johnLennonFacts(facts) {
    
    var container = [];
    var i = 0;
    while (i < facts.length) {
        container.push(`facts[i]` + `!!!`);
        i++;
    }
    return container;


}

function iLoveTheBeatles(num) { //The loop should then increment the number passed in as a parameter
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15); // The condition of the loop should check to see that the parameter number is less than 15

    return love; // Return the array with the strings "I love the Beatles!".
}


