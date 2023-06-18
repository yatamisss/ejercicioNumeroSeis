/*
1. Mostrar en consola la secuencia de Fibonacci:
este debería ser el resultado: 0 ,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987
 */

// a. Entre los números 0 y 1000.

let num = 0;
let num2 = 1;
let secuenciaFibonacci = [];


for (let i = 0; i <= 1000; i++) {
    let suma = num += num2;
    if (suma >= 1000) {
        break;
    }
    secuenciaFibonacci.push(suma)
    num = num2;
    num2 = suma;
}
console.log('Secuencia de Fibonacci entre 0 y 1000: ', secuenciaFibonacci)

//b. Números pares entre 0 y 1000.

const numerosPares = secuenciaFibonacci.filter(suma => suma % 2 === 0);
console.log('Los números pares en la secuencia de Fibonacci son: ', numerosPares)

//c. Números impares entre 0 y 1000.

const numerosImpares = secuenciaFibonacci.filter(suma => suma % 2 === 1);
console.log('Los números impares en la secuencia de Fibonacci son: ', numerosImpares)


// 2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas. 

let pokemon =
    [
        'Pikachu',
        'Charmander',
        'Bulbasaur',
        'Squirtle'
    ]

const nuevoPokemon = pokemon.map(cambio => cambio.toUpperCase());
console.log('Arreglo nombres en mayuscula: ', nuevoPokemon);


// 3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego. 

let pokemon2 = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

const pokemonFuego = pokemon2.filter(tipoPokemon => tipoPokemon.tipo === 'Fuego');
console.log('Arreglo de los pokemon tipo fuego: ', pokemonFuego);