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
let j = true;
let x = 0;
let display = "";
let numbers = [];
let multy = [];
let i = 0;
let p=0;
let additions = document.getElementById('id-add').innerHTML

function addition(){


    let additions = document.getElementById('id-add').innerHTML;
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + additions;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(j = true){
        numbers[i] = document.getElementById('id-top').innerHTML;
        i++;
        j = false;
    }
    numbers[i] = document.getElementById('id-add').innerHTML;
    i++;
    x = 1;
    alert(numbers);
}

function operating(){
    
}

function myCalculation0(){
    var bananaHeight = document.getElementById('id-zero').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + bananaHeight;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-zero').innerHTML;
        i++;
        x = 0;
    }
    alert(numbers);
}

function myCalculation1(){
    if(x == 1){
        numbers[i] = document.getElementById('id-one').innerHTML;
        i++;
        x = 0;
    }
    var banana = document.getElementById('id-one').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + banana;        // display the result of your calculation inside the <p>-Element with the id 'display'
    alert(numbers);

}

function myCalculation2(){

    var red = document.getElementById('id-two').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + red;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-two').innerHTML;
        i++;
        x = 0;
    }
    alert(numbers);
}

function myCalculation3(){
    var green = document.getElementById('id-three').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + green;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-three').innerHTML;
        i++;
        x = 0;
    }
}

function myCalculation4(){

    var yellow = document.getElementById('id-four').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + yellow;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-four').innerHTML;
        i++;
        x = 0;
    }
}

function myCalculation5(){

    var pointy = document.getElementById('id-five').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + pointy;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-five').innerHTML;
        i++;
        x = 0;
    }
}

function myCalculation6(){

    var royalty = document.getElementById('id-six').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + royalty;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-six').innerHTML;
        i++;
        x = 0;
    }
}

function myCalculation7(){

    var king = document.getElementById('id-seven').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + king;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-seven').innerHTML;
        i++;
        x = 0;
    }
}

function myCalculation8(){

    var dom = document.getElementById('id-eight').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + dom;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-eight').innerHTML;
        i++;
        x = 0;
    }
}

function myCalculation9(){

    var calcs = document.getElementById('id-nine').innerHTML;   // Get the Inputvalue and do your calculation (/7)
    document.getElementById('id-top').innerHTML = document.getElementById('id-top').innerHTML + calcs;        // display the result of your calculation inside the <p>-Element with the id 'display'
    if(x == 1){
        numbers[i] = document.getElementById('id-nine').innerHTML;
        i++;
        x = 0;
    }
}

function finalequal(){
    numbers.swapItems(3, 7);
    for(let op = 0; op < array.length; op++) {
        sum += array[op];
    }
}