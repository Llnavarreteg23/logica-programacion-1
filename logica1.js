const prompt = require("prompt-sync")();

function ordenarNumeros() {
    const num1 = Number(prompt("Ingrese el primer número:"));
    const num2 = Number(prompt("Ingrese el segundo número:"));
    const num3 = Number(prompt("Ingrese el tercer número:"));

    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales: " + num1 + ", " + num2 + ", " + num3);
    }
    
    let mayor, medio, menor;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            medio = num2;
            menor = num3;
        } else {
            medio = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            medio = num1;
            menor = num3;
        } else {
            medio = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            medio = num1;
            menor = num2;
        } else {
            medio = num2;
            menor = num1;
        }
    }

    console.log("Números ingresados: " + num1 + ", " + num2 + ", " + num3);
    console.log("Número mayor: " + mayor);
    console.log("Número del centro: " + medio);
    console.log("Número menor: " + menor);
    console.log("Números de mayor a menor: " + mayor + ", " + medio + ", " + menor);
    console.log("Números de menor a mayor: " + menor + ", " + medio + ", " + mayor);
}
    

ordenarNumeros()
