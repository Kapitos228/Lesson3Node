/*function  openfunction() {
    var counter = 0;
    counter++;
    console.log(counter)
}

openfunction()
openfunction()*/
function  closedFunction() {
    let counter = 0;
    let increment = () =>{
        counter++;
        console.log(counter)
    }
    return increment;
}

let countMe = closedFunction();

countMe();
countMe();
