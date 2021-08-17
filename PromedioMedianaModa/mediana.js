/* const lista1 = [
    6,
    2,
    4,
    3,
    1,
]; */

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