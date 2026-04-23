result = document.getElementById("result");
result.style = "color: red";
result.innerHTML = "Magic Number";
addButton = document.querySelector("#addButton");

addButton.addEventListener("click",() => {
    firstNumber = document.querySelector("#firstNumber").value;
    secondNumber = document.querySelector("#secondNumber").value;

    first = parseInt(firstNumber);
    second = parseInt(secondNumber);
    result.innerHTML = first + second;
});

caculatorButton = querySelector("#caculateButton");
inputSmartCaculator = querySelector("#smartCaculator");

function caculate() {
    const inputSmartCaculator = document.querySelector("#smartCaculator").value;
    const input = inputSmartCaculator.replace(" ","");
    const result = parseInt(operands[0]) + parseInt(operand[1]);
    caculationButton.innerHTML = result;
}