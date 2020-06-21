const helloWorld = () =>{
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(hello)

var scope = "IM GLOBAL"

const functionScope = ()=>{
    var scope = "IM JUST LOCAL";
    const func = () =>{
        return scope
    }
    console.log(func());
};

functionScope();

console.log(scope)