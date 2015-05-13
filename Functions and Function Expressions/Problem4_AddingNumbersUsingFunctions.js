function add(a) {

    var sum = a;

    function f(b) {
        sum += b;
        return f;
    }

    f.toString = function() {
        return sum
    }

    return f;
}

console.log(add(1).toString());
console.log(add(2)(3).toString());
console.log(add(1)(1)(1)(1)(1).toString());
console.log(add(1)(0)(-1)(-1).toString());

var addTwo;

addTwo = add(2);
console.log(addTwo.toString());

addTwo = add(2);
console.log(addTwo(3).toString());

addTwo = add(2);
console.log(addTwo(3)(5).toString());