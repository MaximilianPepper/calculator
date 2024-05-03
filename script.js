let num1;
let operator = "";
let num2;

const display = document.querySelector(".display");

function operate (num1,num2,operator){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator === "plus"){
        num1 = num1+num2;
    }
    if (operator === "sub"){
        num1 = num1-num2;
    }
    if (operator === "multi"){
        num1 = num1 * num2;   
    }
    if (operator === "divide"){
        num1 = num1 / num2;    
    }
    display.textContent = num1;
}

let elementsArray = document.querySelectorAll(".but");

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        // populate  display
        if (!display.textContent) display.textContent = elem.value ;
        else {
            display.textContent = display.textContent + elem.value;
        }
        // check for operators
        if (elem.classList.contains("plus")){
            if (operator===""){
                num1 = display.textContent;
                operator = "plus";
            }
            if(num1 && num2){               
                display.textContent = operate(num1,display.textContent,"plus")
            }
        
        }
        // start over ^^^

    });
});