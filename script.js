

var numbers = document.getElementsByClassName('calc_number');
var symbols = document.getElementsByClassName('calc_sign');
var result = document.getElementById('result');
var firstInput= true;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', numberListener);

}

for(let i = 0; i < symbols.length; i++){
    symbols[i].addEventListener('click', symbolListener);
}




function numberListener() {
    display(this.innerHTML);
}

function symbolListener() {
    
    if(this.innerHTML == '='){
        calculate();
    }
    else{
        display(this.innerHTML);
    }

    
    /*result.innerHTML += this.innerHTML;
    if (this.innerHTML === "="){
        result.innerHTML += 'g';
    }*/
}

function display(value){
    if(firstInput){
        result.innerHTML = '';
        firstInput = false;
    }
    result.innerHTML +=  value;     // this.innerHTML;
    
}

function calculate() {
    var res = eval(result.innerHTML);
    display('=' + res);
    firstInput = true;
    displayResults(result.innerHTML);
}

function displayResults(value) {
    var list = document.getElementById('results');
    var listItem = document.createElement('li');
    listItem.innerHTML = value;
    list.appendChild(listItem);
}