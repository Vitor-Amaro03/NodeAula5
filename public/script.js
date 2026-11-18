const campoNumero = document.getElementById('campoNumero');
const btnCalcular = document.getElementById('btnCalcular');
const textoResultado = document.getElementById('textoResultado');

btnCalcular.addEventListener('click', async () => {
    const valorDigitado = campoNumero.value;

    const resposta = await fetch(`/dobro?valor=${valorDigitado}`);

    const dados = await resposta.json();
    
    textoResultado.textContent = `O dobro de ${dados.numeroEnviado} é ${dados.dobro}`;
});