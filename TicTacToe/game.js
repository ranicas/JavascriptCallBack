var readline = require('readline');
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function Game () {
     this.board = new Board ();
     this.currentMark = "x"
};

Game.prototype.play = function () {
    var currentBoard = this.board;
    
    function gameRun(callback) {
        reader.question("Choose a position: (1,1)", function(posString) {
            var posArray = posString.split(",").map(function(el){return parseInt(el);
        })
    }
    function playLoop() {
        if (currentBoard.winner) {
            return console.log("The winner is " + currentBoard.winner);
            reader.close;
        }
       gameRun(playLoop); 
    };
    
    playLoop();
};

Game.prototype.changePlayer() {
    this.currentMark = (this.currentMark === "x" ? "o" : "x");
}

module.exports = Game;