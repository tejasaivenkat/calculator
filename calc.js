let firstNumber="";
let secondNumber="";
let operator="";

function appendNumber(num){
    if(operator===""){
        firstNumber+=num;
        document.getElementById("calc").value=firstNumber;
    }
    else{
        secondNumber+=num;
       
        document.getElementById("calc").value=firstNumber+""+operator+""+secondNumber;
    }
}
function setOperator(op){
    operator=op;
    document.getElementById("calc").value=firstNumber+""+operator;
 
}
function calculate(){
   let calc;
   switch(operator){
    case '+':
        calc=parseInt(firstNumber)+parseInt(secondNumber);
        break;
    case '-':
            calc=parseInt(firstNumber)-parseInt(secondNumber);
            break;

    case '*':
        calc=parseInt(firstNumber)*parseInt(secondNumber);
        break;
    case '/':
        calc=parseInt(firstNumber)/parseInt(secondNumber);
        break;

   }
   document.getElementById("calc").value=calc;
   
}
function clearresult(){
    firstNumber="";
    secondNumber="";
    operator="";
    document.getElementById("calc").value="";
}
