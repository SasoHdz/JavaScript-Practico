// Area Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado (lado){
    return lado*lado;
}

// Area Triangulo
function perimetroTriangulo(lado1, lado2, base)
{
    return lado1+lado2+base;
}

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}

// Area Circulo
//Diametro
function diametroCirculo(radio){
    return radio * 2
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);

    return PI*diametro;
}

//Area
function areaCirculo(radio){
    return PI * (radio * radio);
}

// Interactuando con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
    
}