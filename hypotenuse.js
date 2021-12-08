const side = document.querySelectorAll(".side-input");
const hypotunuseBtn = document.querySelector("#hypotenuse-btn")
const outputE1=document.querySelector("#output");

function calculatesumofsquares(a,b) {
    const sumofsquares = a*a + b*b;
    return sumofsquares;
}

function calculatehypotenuse() {
    const sumofsquares = calculatesumofsquares(Number(side
    [0].value),Number(side[1].value));
    const lengthofHypotenuse = Math.sqrt(sumofsquares); 
    outputE1.innerText = "The length of hypotenuse is " + lengthofHypotenuse

}

hypotunuseBtn.addEventListener("click",calculatehypotenuse);