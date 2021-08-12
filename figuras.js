// Area Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro mide: "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area mide : "+ areaCuadrado + "cm^2");

console.groupEnd();

// Area Triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es :"+ alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es :"+ perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log("El area del triángulo es :"+ areaTriangulo + "cm^2");

console.groupEnd();

// Area Circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo+"cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: "+ diametroCirculo+"cm");

//PI
const PI = Math.PI;

//Circunferencia
const perimetroCirculo = PI * diametroCirculo;
console.log("El perimetro del circulo es: "+ perimetroCirculo+"cm");


//Area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El area del circulo es: "+ areaCirculo+"cm^2");


console.groupEnd();
