const resposta = document.getElementById("resultado");

const calcular = e => {
    e.preventDefault();
    
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = ((peso / (altura**2))).toFixed(2);
    let resultado = "Não avaliado.";

    resposta.innerHTML =
    `Seu IMC é ${imc}kg/m².<br>
    Diagnóstico: ` + diagnosticar(imc, resultado);
};

const diagnosticar = (imc, resultado) => {
    if (imc < 17)
            resultado = "Muito abaixo do peso!";
    else if (imc >= 17 && imc <= 18.49)
            resultado = "Abaixo do peso...";
    else if (imc >= 18.5 && imc <= 24.99)
            resultado = "Peso normal";
    else if (imc >= 25 && imc <= 29.99)
            resultado = "Acima do peso...";
    else if (imc >= 30 && imc <= 34.99)
            resultado = "Obesidade I";
    else if (imc >= 35 && imc <= 39.99)
            resultado = "Obesidade II (severa)!"
    else
            resultado = "Obesidade III (mórbida)!!";
    
    return resultado;
};

document.getElementById("formulario").addEventListener('submit', calcular);