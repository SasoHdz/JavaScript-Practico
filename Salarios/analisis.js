function esPar(num) {
    return (num % 2 === 0);
}

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

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
    );

const medianaTop10Col = medianaSalarios(salariosColSorted);

// Capacidad de endeudamiento 
// Capacidad de Endeudamiento = (Ingresos Mensuales – Gastos Fijos) x 0.40

function capacidadEndeudamiento () {
    const ingresosMensuales = document.getElementById('ingresoMensual').value;
    const gastosFijos = document.getElementById('gastosFijos').value;
    const name =  document.getElementById('name').value;

    const posibleEndeudamiento = (ingresosMensuales - gastosFijos) * .40;

    console.log(posibleEndeudamiento);
    document.getElementById('resultEndeudamiento').innerText = name + " te puedes endeudar por :"  + posibleEndeudamiento + " 💰😃"; 

    agregandoDato(ingresosMensuales);
}

// Agregando Objeto a paises

function agregandoDato(salario, nombre){
    const pais =  document.getElementById('pais').value;

    if(pais === 'México')
    {
        mexico.push({
            name: nombre,
            salary: salario,
          });
    }
    else if (pais === 'Colombia') {
        colombia.push({
            name: nombre,
            salary: salario,
          });
    }
}

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);