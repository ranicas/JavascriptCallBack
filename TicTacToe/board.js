function Board () {
    this.grid = [["_","_","_"], ["_","_","_"], ["_","_","_"]];
}

Board.DIAGONAL = [[[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]];
Board.HORIZONTAL = [[[0, 0], [0, 1], [0, 2]], 
                    [[1, 0], [1, 1], [1, 2]], 
                    [[2, 0], [2, 1], [2, 2]]];
Board.VERTICAL = [[[0, 0], [1, 0], [2, 0]], 
                  [[0, 1], [1, 1], [2, 1]], 
                  [[0, 2], [1, 2], [2, 2]]];
Board.prototype.winner = function(){
    //check whether 3 in line
    var diag = this.isWonHelper(this.DIAGONAL);
    var horz = this.isWonHelper(this.HORIZONTAL);
    var vert = this.isWonHelper(this.VERTICAL);
    if (diag) {
        return diag;
    } else if (hor)) {
        return horz;
    } else if (vert)) {
        return vert;
    } else {
        return false;
    }
}

Board.prototype.isWonHelper = function(array) {
    array.forEach(function(el) {
        if (this.pos(array[0]) === this.pos(array[1]) && 
            this.pos(array[0]) === this.pos(array[2]) && 
            this.pos(array[0]) !== "_"){
            return array[0];
        }
    });
    return false;
}

Board.prototype.isEmpty = function(array) {
  return this.pos(array) === "_"  
}

Board.prototype.pos = function(arr) {
    return this.grid[arr[0])])[arr[1]];
}

Board.prototype.placeMark = function(arr, value) {
    this.grid[arr[0]][arr[1]] = value;
}


module.exports = Board;