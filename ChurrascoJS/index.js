const adultosAlcoolicos = document.getElementById('alcoolicos');
const adultosNaoAlcoolicos = document.getElementById('nao_alcoolicos');
const crianca = document.getElementById('criancas');
const divResultado = document.getElementById('resultado');

let carne = 0;
let acompanhamentos = 0;
let cerveja = 0;
let refrigerante = 0;
let agua = 0;

const quantidadeAdulto = {
    carne: "400g",
    acompanhamentos: "200g",
    cerveja: "2l",
    refrigerante: "500ml",
    agua: "400ml",
};

const quantidadeCrianca = {
    carne: "200g",
    acompanhamentos: "200g",
    refrigerante: "500ml",
    agua: "400ml",
};

const calculoAdulto = () => {
    carne += parseInt(quantidadeAdulto.carne) * (Number(adultosAlcoolicos.value) + Number(adultosNaoAlcoolicos.value));
    acompanhamentos += parseInt(quantidadeAdulto.acompanhamentos) * (Number(adultosAlcoolicos.value) + Number(adultosNaoAlcoolicos.value));
    cerveja += parseInt(quantidadeAdulto.cerveja) * Number(adultosAlcoolicos.value);
    refrigerante += parseInt(quantidadeAdulto.refrigerante) * Number(adultosNaoAlcoolicos.value);
    agua += parseInt(quantidadeAdulto.agua) * (Number(adultosAlcoolicos.value) + Number(adultosNaoAlcoolicos.value));
};

const calculoCrianca = () => {
    carne += parseInt(quantidadeCrianca.carne) * Number(crianca.value);
    acompanhamentos += parseInt(quantidadeCrianca.acompanhamentos) * Number(crianca.value);
    refrigerante += parseInt(quantidadeCrianca.refrigerante) * Number(crianca.value);
    agua += parseInt(quantidadeCrianca.agua) * Number(crianca.value);
};


const converter = () => {
    carne /= 1000;
    acompanhamentos /= 1000;
    refrigerante /= 1000;
    agua /= 1000;
};

const resultado = (e) => {
    e.preventDefault();
    calculoAdulto();
    calculoCrianca();
    converter();
    
    document.getElementById('formulario').style.display = 'none';

    adultosAlcoolicos.value = "";
    adultosNaoAlcoolicos.value = "";
    crianca.value = "";

    divResultado.children[0].innerHTML = `Carne: ${carne}kg<br>` + `Acompanhamentos: ${acompanhamentos}kg<br>` 
    + `Cerveja: ${cerveja}l<br>` + `Refrigerante: ${refrigerante}l<br>` + `Água: ${agua}l`;

    divResultado.style.display = 'flex';
};

const voltarTela = () => {
    document.getElementById('formulario').style.display = 'flex';

    divResultado.style.display = 'none';

    divResultado.children[0].innerHTML = "";
    carne = 0;
    acompanhamentos = 0;
    cerveja = 0;
    refrigerante = 0;
    agua = 0;
};

const iniciar = () => {
    document.getElementById('formulario').addEventListener('submit', resultado);
    document.getElementById('voltar').addEventListener('click', voltarTela);
};

document.addEventListener('DOMContentLoaded', iniciar)