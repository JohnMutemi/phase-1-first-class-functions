
function receivesAFunction(callback){
    return callback();
    
}
receivesAFunction(function(){return "Hello there:"

});
function returnsANamedFunction(){
    let name;
    name="Marcus";
    return function myName(){
        console.log(`my name is ${name}`);
    }
}
function returnsAnAnonymousFunction(){
    let firstname;
    firstname="Josy";
    return function (){console.log(`my firstname is: ${firstname}`)}
}