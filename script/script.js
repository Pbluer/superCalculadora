var numberOne = document.querySelector('#numberOne');
var numberTwo = document.querySelector('#numberTwo');

numberTwo.addEventListener('focusout', ()=>{
      
    let numOne =  parseInt(numberOne.value);
    let numTwo =  parseInt(numberTwo.value);

    function divider(n) {
        var r = [];
        for (var i = 1; i <= n; i++) {
           if (n % i === 0) {
              r.push(i)
           }
        }
        return r;
    }
    
    function factorial(n){
        var r = 1;
        for (var i = n; i > 1; i--) {
           r *= i;
        }
        return r;
    }

    document.querySelector('#sum').innerText = numOne + numTwo;
    document.querySelector('#multiplication').innerText = numOne * numTwo;
    document.querySelector('#squareA').innerText = numOne * numOne;
    document.querySelector('#dividerB').innerText = divider(numTwo);

    document.querySelector('#subtractionOne').innerText = numOne - numTwo;
    document.querySelector('#divisionOne').innerText = numOne / numTwo;
    document.querySelector('#squareB').innerText = numTwo * numTwo;
    document.querySelector('#factorialOne').innerText = factorial(numOne);

    document.querySelector('#subtractionTwo').innerText = numTwo - numOne;
    document.querySelector('#divisionTwo').innerText = numTwo / numOne;
    document.querySelector('#dividerA').innerText = divider(numOne);
    document.querySelector('#factorialTwo').innerText = factorial(numTwo);

});
