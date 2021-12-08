const input=document.querySelectorAll(".angle-input")
const isTriangleBtn=document.querySelector("#is-triangle-btn")
const outputE1=document.querySelector("#output");
console.log(isTriangleBtn)

function calculatesumofAngel(angle1,angle2,angle3){
    const sumofAngles=angle1+angle2+angle3;
    return sumofAngles;
    
}

function istriangle(){
    const sumofAngles=calculatesumofAngel(Number(input[0].value),
    Number(input[1].value),Number(input[2].value));

    if(sumofAngles===180){
        outputE1.innerText="Yay,The angle from a triangle";
    }
    else{
        outputE1.innerText="oh oh!The angles don't form a triangle"
    }

}
isTriangleBtn.addEventListener("click",istriangle)