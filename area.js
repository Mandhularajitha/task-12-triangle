const side=document.querySelectorAll(".side-input")
const areaBtn=document.querySelector("#area-btn")
const outputE1=document.querySelector("#output")

function Calculatemultiplyheightbywidth(a,b){
    const heightmutliplybywidth=1/2*(a*b)
    return heightmutliplybywidth
}
function CalculateAreaOfTriangle(){
    const heightmutliplybywidth=Calculatemultiplyheightbywidth(Number(side[0].value),Number(side[1].value))
    outputE1.innerText =" The area of triangle is "+ heightmutliplybywidth


}
areaBtn.addEventListener("click",CalculateAreaOfTriangle)