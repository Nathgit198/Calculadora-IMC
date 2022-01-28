const calcular = document.getElementById("enviarBtn");

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (valorImc < 25) {
            classificacao = 'com peso ideal. Parabéns!!';
        } else if (valorImc < 30) {
            classificacao = 'levemente acima do peso';
        } else if (valorImc < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorImc < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III ou Mórbida. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}.`;

    } else {
        resultado.textContent = `Preencha todos os campos!!!`;
    }

}

calcular.addEventListener('click', imc);

/* Funções do modal */
const modal = document.getElementById("containerModal");
const btnModal = document.getElementById("abrirModal");
const fecharModal = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnModal.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fecharModal.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}