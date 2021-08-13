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
    return (lado1*1+lado2*1+base*1);
}

function alturaTrianguloIsoceles(lado1, lado2, base){

    if(lado1 === lado2)
    {
        const cateto1 = base / 2;
        const hipotenusa = lado1;
    
        const altura = Math.sqrt(Math.pow(2,hipotenusa) - Math.pow(2,cateto1));

        return altura;
    }
    else return "No es un triángulo isósceles";
   
   
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
    document.getElementById('resultadoCuadrado').innerHTML = perimetro + "cm";
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    document.getElementById('resultadoCuadrado').innerHTML = area + "cm^2";
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1Triangulo");
    const lado1 = input1.value;
    const input2 = document.getElementById("lado2Triangulo");
    const lado2 = input2.value;
    const input3 = document.getElementById("baseTriangulo");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById('resultadoTriangulo').innerHTML = perimetro + "cm";
}

function calcularAreaTriangulo(){
    const input = document.getElementById("baseTriangulo");
    const base = input.value;
    const input2 = document.getElementById("alturaTriangulo");
    const altura = input2.value;

    const area = areaTriangulo(base, altura);
    document.getElementById('resultadoTriangulo').innerHTML = area + "cm^2";
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    document.getElementById('resultadoCirculo').innerHTML = perimetro + "cm";

}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    document.getElementById('resultadoCirculo').innerHTML = area + "cm^2";
}
