const button = document.getElementById("btn5");

button.addEventListener("click", handleRotate);

function handleRotate() {
    const btn1 = document.getElementById("btn1").innerHTML;
    const btn2 = document.getElementById("btn2").innerHTML;
    const btn3 = document.getElementById("btn3").innerHTML;
    const btn4 = document.getElementById("btn4").innerHTML;
    const btn6 = document.getElementById("btn6").innerHTML;
    const btn7 = document.getElementById("btn7").innerHTML;
    const btn8 = document.getElementById("btn8").innerHTML;
    const btn9 = document.getElementById("btn9").innerHTML;

    document.getElementById("btn1").innerHTML = btn4;
    document.getElementById("btn2").innerHTML = btn1;
    document.getElementById("btn3").innerHTML = btn2;
    document.getElementById("btn4").innerHTML = btn7;
    document.getElementById("btn6").innerHTML = btn3;
    document.getElementById("btn7").innerHTML = btn8;
    document.getElementById("btn8").innerHTML = btn9;
    document.getElementById("btn9").innerHTML = btn6;
}
