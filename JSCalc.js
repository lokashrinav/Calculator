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

function operate(ops, number1, number2) {

}
let x = 1;
let display = "";
let numbers = [];
let multy = [];

let i = 0;
function addition(){
    let additions = document.getElementById('id-add').innerHTML
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + additions;        // display the result of your calculation inside the <p>-Element with the id 'display'
    x = 0;
}

function operating(){
    
}

function myCalculation0(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        display = "";
        x = 1;
        i++;
    }
    if(x == 2) {
        multy[i] = parseInt(number);
        number = "";
        display = "";
        x = 1;
        i++;
    }
    var bananaHeight = document.getElementById('id-zero').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + bananaHeight;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + bananaHeight;
    alert(number);
    alert(numbers);
}

function myCalculation1(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var banana = document.getElementById('id-one').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + banana;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + document.getElementById('id-one').innerHTML;
    alert(number);
    alert(numbers);

}

function myCalculation2(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var red = document.getElementById('id-two').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + red;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + document.getElementById('id-two').innerHTML;
    alert(number);
    alert(numbers);
}

function myCalculation3(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var green = document.getElementById('id-three').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + green;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + document.getElementById('id-three').innerHTML;
    alert(number);

}

function myCalculation4(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var yellow = document.getElementById('id-four').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + yellow;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + document.getElementById('id-four').innerHTML;
    alert(number);

}

function myCalculation5(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var pointy = document.getElementById('id-five').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + pointy;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + document.getElementById('id-five').innerHTML;
    alert(number);

}

function myCalculation6(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var royalty = document.getElementById('id-six').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + royalty;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + document.getElementById('id-six').innerHTML;
    alert(number);

}

function myCalculation7(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var king = document.getElementById('id-seven').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + king;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + document.getElementById('id-seven').innerHTML;
    display = "";
    alert(number);

}

function myCalculation8(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var dom = document.getElementById('id-eight').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + dom;        // display the result of your calculation inside the <p>-Element with the id 'display'
    number = display + document.getElementById('id-eight').innerHTML;
    alert(number);

}

function myCalculation9(){
    if(x == 0) {
        numbers[i] = parseInt(number);
        number = "";
        x = 1;
        i++;
    }
    var calcs = document.getElementById('id-nine').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + calcs;        // display the result of your calculation inside the <p>-Element with the id 'display'
    display = document.getElementById('id-nine').innerHTML;
    alert(number);

}

function finalequal(){
    for(let op = 0; op < array.length; op++) {
        sum += array[op];
    }
}