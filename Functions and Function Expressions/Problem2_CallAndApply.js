printArgsInfo.call();

printArgsInfo.call(null, 22, [3, 5], -5.5);

printArgsInfo.apply();

printArgsInfo.apply(null, [-102, {name: 'Ivan', age: 22}, 12.5]);

function printArgsInfo(){
    for (var i = 0; i < arguments.length; i++){
        console.log(arguments[i]+ ' (' + typeof(arguments[i]) + ')');
    }
    console.log();
}