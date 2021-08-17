const lista1 = [1,2,3,4,5,5,5,3,5,2,2,0,3,1,2,3,4,5,6,1,1,1,2,3,3,4,5,1,7,8,98,7,12];


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