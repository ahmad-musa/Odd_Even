/////////////           Nav Bar          /////////////

// let nav_trigger = document.getElementById('nav_trigger');
// let nav_close = document.getElementById('nav_close');

// nav_trigger.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.getElementById('nav_links').classList.toggle('nav_show');
// })

// nav_close.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.getElementById('nav_links').classList.toggle('nav_show');
// })


///////////////       Result                      ////////////////////

// Output Show Function // 

function show(num1) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(+num1);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}




function calcForOdd(number1, number2) {
    document.getElementById("list").innerHTML = ' ';
    for (number1; number1 <= number2; number1++) {
        if (number1 % 2 != 0) {
            show(number1);
        }
    }

}

function calcForEven(number1, number2) {
    document.getElementById("list").innerHTML = ' ';
    for (number1; number1 <= number2; number1++) {
        if (number1 % 2 == 0) {
            show(number1);
        }
    }

}



// Checking Odd Function //

function odd(number1, number2) {

    if (number1 < 0 || number2 < 0) {
        alert('All valid input is needed');
    } else {
        calcForOdd(number1, number2);
    }
}

// Checking Even Function //

function even(number1, number2) {
    if (number1 < 0 || number2 < 0) {
        alert('All valid input is needed');
    } else {
        calcForEven(number1, number2);
    }
}



// const calcFor = (num1, num2) => {

//     document.getElementById("list").innerHTML = ' ';
//     calculateOdd(num1, num2);
//     calculateEven(num1, num2);

// }

// const calcWhile = (num1, num2) => {

//     document.getElementById("list").innerHTML = ' ';
//     calculate_grade('Bangla', num1);
//     calculate_grade('English', num2);

// }

// const calcDo = (num1, num2) => {

//     document.getElementById("list").innerHTML = ' ';
//     calculate_grade('Bangla', num1);
//     calculate_grade('English', num2);

// }

// const calcRecurse = (num1, num2) => {

//     document.getElementById("list").innerHTML = ' ';
//     calculate_grade('Bangla', num1);
//     calculate_grade('English', num2);

// }

function allReset() {
    document.getElementById("form").reset();
    document.getElementById("list").innerHTML = '';

}