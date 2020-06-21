const fruits = () =>{
    if(true){
        var fruit1 = 'Apple';
        let fruit2 = 'Banana'
        const fruit3 = 'Kiwi';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

var x = 1;
{
    var x = 2
    console.log(x)
}
console.log(x)

const anotherFunction = () => {
    for (let i=0; i < 10; i++){
        setTimeout(()=> {
            console.log (i);
        }, 1000)
    }
}
anotherFunction();
