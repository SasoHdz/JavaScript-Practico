const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted =  salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(num) {
    return (num % 2 === 0);
}
 
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const persona1 = lista[mitad];
        const persona2 = lista[mitad-1];

        const mediana = (persona1 + persona2) / 2;

        return mediana;
    }
    else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

console.log(
    medianaSalarios(salariosColSorted)
);