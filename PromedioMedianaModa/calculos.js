// Media Aritmetica

function calcularPromedio (lista) {

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){ 
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Mediana

function esPar(num) {
    if(num % 2 === 0) return true;
    else return false;
}

function calcularMediana(lista)
{
    lista.sort((a,b) => a-b); 

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)) {
        const element1 = lista[mitadLista];
        const element2 = lista[mitadLista-1];

        mediana =  (element1 + element2)/2;
    }
    else {
        mediana = lista[mitadLista];
    }

    return mediana;
}

// Moda

function calcularModa (lista) {

    const listaCount = {};

    lista.map(
        function (element) {
        if (listaCount[element]) {
                listaCount[element] += 1;
        }
        else  listaCount[element] = 1;
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length-1];

    return moda;

}

//

function calcularDatos() {
    const datos = document.getElementById('inputDatos').value;
    console.log(datos);
}