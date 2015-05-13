Array.prototype.flatten = function flatten(){
    var result = [];
    for (var i = 0; i < this.length; i++){
        if (this[i] instanceof Array){
            for (var j = 0; j < this[i].length; j++){
                if (this[i][j] instanceof Array){
                    for (var k = 0; k < this[i][j].length; k++){
                        result.push(this[i][j][k]);
                    }
                }
                else {
                    result.push(this[i][j]);
                }
            }
        }
        else {
            result.push(this[i]);
        }
    }
    return result;
}

var array;
array = [1, 2, 3, 4];
console.log(array.flatten());
array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array);
array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());