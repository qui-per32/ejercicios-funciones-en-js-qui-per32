// crea una función llamada filtraGente
// recibe un array que contiendo objetos con dos propiedades nombre y edad

// devuelve un array con la gente que su nombre tiene 4 letras y menores de 15 años

// utiliza el método filter de los arrays.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]



// Aquí tu código.  Desde aquí:
const filtraGente = (filterGente) => filterGente.filter(cuentaGente=> cuentaGente.nombre.length === 4 && cuentaGente.edad < 15)
// Hasta aquí.


let test = require('./test.js');

test(filtraGente, [gente], [{
    nombre: 'Pepe',
    edad: 14
}] );
