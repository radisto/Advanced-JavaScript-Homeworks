String.prototype.startsWith = function startsWith(substring){
    if (substring.length > this.length) {
        return false;
    } else {
        if (substring === this.substr(0, substring.length)) {
            return true;
        }
    }
    return false;
}

String.prototype.endsWith = function endsWith(substring){
    if (substring.length > this.length) {
        return false;
    } else {
        if (substring === this.substr(this.length - substring.length)) {
            return true;
        }
    }
    return false;
}

String.prototype.left = function left(count){
    if (count > this.length) {
        return this.toString();
    } else {
        return this.substr(0, count);
    }
}

String.prototype.right = function right(count){
    if (count > this.length) {
        return this.toString();
    } else {
        return this.substr(this.length - count);
    }
}

String.prototype.padLeft = function padLeft(count, character){
    character = (typeof character === 'undefined') ? ' ' : character;
    if (this.length >= count) {
        return this.toString();
    } else {
        return Array(count - this.length + 1).join(character) + this.toString();
    }
}

String.prototype.padRight = function padRight(count, character){
    character = (typeof character === 'undefined') ? ' ' : character;
    if (this.length >= count) {
        return this.toString();
    } else {
        return this.toString() + Array(count - this.length + 1).join(character);
    }
}

String.prototype.repeat = function repeat(count){
    var result = this.toString();
    for (var i = 1; i < count; i++) {
        result += this.toString();
    }
    return result;
}

var example = "This is an example string used only for demonstration purposes.";

console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

example = "abcdefgh";

console.log(example.left(5).right(2));

hello = "hello";

console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";

console.log(character.repeat(5));
console.log("~".repeat(3));

console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));