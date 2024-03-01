const btnLeft = document.querySelector(".btnLeft"),
    btnRight =document.querySelector(".btnRight"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".sliderSection");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
},3000);

//Variable de operacion para mover imagenes
let operacion = 0;
//Contador de imagenes
let counter = 0;
//Variable para calcular el porcentaje que ocupara cada imagen
let widthImg = 100/sliderSection.length;
//avanzar
function moveToRight(){
    if (counter >= sliderSection.length -1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return;
    }
    counter++
    operacion = operacion + widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s"
    
}
//retroceder
function moveToLeft(){ 
    counter--;
    if(counter < 0 ){
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length -1)
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return;
    }
    operacion = operacion - widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s"
}

