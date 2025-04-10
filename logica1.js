const prompt = require("prompt-sync")();

function ordenarNumeros() {
    const num1 = Number(prompt("Ingrese el primer número:"));
    const num2 = Number(prompt("Ingrese el segundo número:"));
    const num3 = Number(prompt("Ingrese el tercer número:"));

    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales: " + num1 + ", " + num2 + ", " + num3);
    }
    
    const numbers = [num1, num2, num3];
    const numerosOrdenadosAscendente = [...numbers].sort((a, b) => a - b);
    const numerosOrdenadosDescendente = [...numbers].sort((a, b) => b - a);
    
    console.log("Números ingresados: " + numbers.join(", "));
    console.log("Números de mayor a menor: " + numerosOrdenadosDescendente.join(", "));
    console.log("Números de menor a mayor: " + numerosOrdenadosAscendente.join(", "));
    }

ordenarNumeros()
