let num1;
let operator = "";
let num2;
let result = false;
const display = document.querySelector(".display");

function operate (num1,num2,operator){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator === "plus"){
        num1 = num1+num2;
    }
    if (operator === "minus"){
        num1 = num1-num2;
    }
    if (operator === "multi"){
        num1 = num1 * num2;   
    }
    if (operator === "divide"){
        if (num1 !== 0 && num2===0){
            return display.textContent = "NO!";
        }
        num1 = num1 / num2;
        num1 = Math.round(num1*100)/100;   
    }
    num1 = num1.toString()
    return num1;
}
 
let elementsArray = document.querySelectorAll(".but");

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        // clear screen after user inputs a number  after a result has been displayed
        if (elem.value && result===true){
            result= false;
            display.textContent = "0";
        }
        // populate  display
        if (display.textContent==="0") {
            display.textContent = elem.value ;
            // operate logic
            if (operator ===""){
                num1 = display.textContent;
            }
            else if (elem.value){
                num2 = display.textContent;
            }
        }
        else {
            display.textContent = display.textContent + elem.value;
            // operate logic
            if (operator ==="" && result===false){
                num1 = display.textContent;
            }
            else if (operator !=="" && result===false){
                num2 = display.textContent;
            }
        }
        
        // OPERATORS LOGIC

        // plus
        if (elem.classList.contains("plus")){
            if (operator !== "" && num2 === undefined){
                display.textContent = num1;
                return;
            }
            if (operator==="" && num2 === undefined){
                operator = "plus";
                display.textContent="0";
            }
            if (num1 !== undefined && num2 !== undefined){
                display.textContent = operate(num1,num2,operator);
                num1 = display.textContent;
                result = true;
                num2 = undefined;
                operator = "plus";
            }
           
            
            
        }
        // equal
        if (elem.classList.contains("equal")){
            if (num1 !== undefined && num2 !== undefined && operator !== ""){
                display.textContent = operate(num1,num2,operator);
                num1 = display.textContent;
                result = true;
                num2 = undefined;
                operator = "";
            }
        }
        // minus
        if (elem.classList.contains("minus")){
            if (operator !== "" && num2 === undefined){
                display.textContent = num1;
                return;
            }
            if (operator==="" && num2 === undefined){
                operator = "minus";
                display.textContent="0";
            }
            if (num1 !== undefined && num2 !== undefined){
                display.textContent = operate(num1,num2,operator);
                num1 = display.textContent;
                result = true;
                num2 = undefined;
                operator = "minus";
            }    
        }
        // multi
        if (elem.classList.contains("multi")){
            if (operator !== "" && num2 === undefined){
                display.textContent = num1;
                return;
            }
            if (operator==="" && num2 === undefined){
                operator = "multi";
                display.textContent="0";
            }
            if (num1 !== undefined && num2 !== undefined){
                display.textContent = operate(num1,num2,operator);
                num1 = display.textContent;
                result = true;
                num2 = undefined;
                operator = "multi";
            }    
        }
        // divide
        if (elem.classList.contains("divide")){
            if (operator !== "" && num2 === undefined){
                display.textContent = num1;
                return;
            }
            if (operator==="" && num2 === undefined){
                operator = "divide";
                display.textContent="0";
            }
            if (num1 !== undefined && num2 !== undefined){
                display.textContent = operate(num1,num2,operator);
                num1 = display.textContent;
                result = true;
                num2 = undefined;
                operator = "divide";
            }    
        }
    });
});