function add(a, b) {
    return a + b;
}

function multiply(c, d) {
    return c * d;
}

function subtract(e, f) {
    return e - f;
}

function divide(g, h) {
    return (g/h)
}

function cleared(){
    document.getElementById('id-top').innerHTML = "";
}

function operate(ops, number1, number2) {

}
let j = true;
let x = 0;
let display = "";
let numbers = [];
let multy = [];
let i = 0;
let p = 0;
let additions = document.getElementById('id-add').innerHTML

function addition(){
    var addit = document.getElementById('id-add').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + addit;  
}

function subtraction(){
    var sub = document.getElementById('id-sub').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + sub;  
}

function division(){
    var bHeight = document.getElementById('id-divis').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + bHeight;  
}

function multiplication(){
    var bat = document.getElementById('id-multi').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + bat;  
}

function myCalculation0(){
    var bananaHeight = document.getElementById('id-zero').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + bananaHeight;        // display the result of your calculation inside the <p>-Element with the id 'display'
}

function myCalculation1(){
    var banana = document.getElementById('id-one').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + banana;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function myCalculation2(){

    var red = document.getElementById('id-two').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + red;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function myCalculation3(){
    var green = document.getElementById('id-three').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + green;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function myCalculation4(){

    var yellow = document.getElementById('id-four').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + yellow;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function myCalculation5(){

    var pointy = document.getElementById('id-five').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + pointy;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function myCalculation6(){

    var royalty = document.getElementById('id-six').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + royalty;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function myCalculation7(){

    var king = document.getElementById('id-seven').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + king;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function myCalculation8(){

    var dom = document.getElementById('id-eight').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + dom;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function myCalculation9(){

    var calcs = document.getElementById('id-nine').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + calcs;        // display the result of your calculation inside the <p>-Element with the id 'display'

}

function finalequal(){
    let myArray = document.getElementById('id-top').innerHTML.split(" ");
    while(myArray.length>1){
       if(myArray.indexOf("*") < myArray.indexOf("/")){
        
        if(myArray.indexOf("*")!=-1){
            let first = parseInt(myArray[myArray.indexOf("*")-1]);
            let second = parseInt(myArray[myArray.indexOf("*")+1]);
            myArray.splice(myArray.indexOf("*")-1, 1)
            myArray.splice(myArray.indexOf("*")+1, 1)
            myArray[myArray.indexOf("*")] = first * second;
        }

        else if(myArray.indexOf("/")!=-1){
            let third = parseInt(myArray[myArray.indexOf("/")-1]);
            let fourth = parseInt(myArray[myArray.indexOf("/")+1]);
            myArray.splice(myArray.indexOf("/")-1, 1)
            myArray.splice(myArray.indexOf("/")+1, 1)
            myArray[myArray.indexOf("/")] = third / fourth;
        }
    }
       else if(myArray.indexOf("*") > myArray.indexOf("/")) {

        if(myArray.indexOf("/")!=-1){
            let third = parseInt(myArray[myArray.indexOf("/")-1]);
            let fourth = parseInt(myArray[myArray.indexOf("/")+1]);
            myArray.splice(myArray.indexOf("/")-1, 1)
            myArray.splice(myArray.indexOf("/")+1, 1)
            myArray[myArray.indexOf("/")] = third / fourth;
        }

        else if(myArray.indexOf("*")!=-1){
            let first = parseInt(myArray[myArray.indexOf("*")-1]);
            let second = parseInt(myArray[myArray.indexOf("*")+1]);
            myArray.splice(myArray.indexOf("*")-1, 1)
            myArray.splice(myArray.indexOf("*")+1, 1)
            myArray[myArray.indexOf("*")] = first * second;
        }
       
    }
        if(myArray.indexOf("+") < myArray.indexOf("-")){

        if(myArray.indexOf("+")!=-1) {
            let fifth = parseInt(myArray[myArray.indexOf("+")-1]);
            let sixth = parseInt(myArray[myArray.indexOf("+")+1]);
            myArray.splice(myArray.indexOf("+")-1, 1)
            myArray.splice(myArray.indexOf("+")+1, 1)
            myArray[myArray.indexOf("+")] = fifth + sixth;
        }

        else if(myArray.indexOf("-")!=-1) {
            let seventh = parseInt(myArray[myArray.indexOf("-")-1]);
            let eighth = parseInt(myArray[myArray.indexOf("-")+1]);
            myArray.splice(myArray.indexOf("-")-1, 1)
            myArray.splice(myArray.indexOf("-")+1, 1)
            myArray[myArray.indexOf("-")] = seventh - eighth;
        }
    }
        else if(myArray.indexOf("+") > myArray.indexOf("-")){
            if(myArray.indexOf("-")!=-1) {
                let seventh = parseInt(myArray[myArray.indexOf("-")-1]);
                let eighth = parseInt(myArray[myArray.indexOf("-")+1]);
                myArray.splice(myArray.indexOf("-")-1, 1)
                myArray.splice(myArray.indexOf("-")+1, 1)
                myArray[myArray.indexOf("-")] = seventh - eighth;
            }
            else if(myArray.indexOf("+")!=-1) {
                let fifth = parseInt(myArray[myArray.indexOf("+")-1]);
                let sixth = parseInt(myArray[myArray.indexOf("+")+1]);
                myArray.splice(myArray.indexOf("+")-1, 1)
                myArray.splice(myArray.indexOf("+")+1, 1)
                myArray[myArray.indexOf("+")] = fifth + sixth;
            }
        }
    }
    document.getElementById('id-top').innerHTML = myArray;
}