const exibirResultado = e => {
    e.preventDefault();

    const medida = document.getElementById('medida').value;
    let resultado = [];
    
    calcular(medida, resultado);

    console.log("--- Equivalência ---");
    resultado.forEach(r => console.log(r));
};

const calcular = (x, y) => {
    y[0] = Number.isInteger(x * 100) == false 
    ? (x * 100).toFixed(2) + " cm" : Math.floor(x * 100) + " cm";
    
    y[1] = Number.isInteger(Number(x)) == false 
    ? Number(x).toFixed(2) + " m" : Math.floor(x) + " m";

    y[2] = Number.isInteger(x / 1000) == false
    ? (x / 1000).toFixed(2) + " Km" : Math.floor(x / 1000) + " Km";
};

const iniciar = () => {
    const formulario = document.forms[0];
    formulario.addEventListener('submit', exibirResultado);
};

document.addEventListener('DOMContentLoaded', iniciar);