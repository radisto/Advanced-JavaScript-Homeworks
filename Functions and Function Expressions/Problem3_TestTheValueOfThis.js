variable = 'global scope';

testContext(variable);

f();

var a = new testContext(variable);

function testContext(variable){
    var variable = 'using new';
    console.log(this.variable);
}

function f(){
    var variable = 'inside another function';
    testContext(variable);
}

//Can't make it work.