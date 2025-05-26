document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botao-sorteio').addEventListener('click', function() {
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        if (isNaN(numeroMaximo) || numeroMaximo <= 1) {
            alert("Por favor, digite um número válido maior ou igual a 2.");
            return;
        }

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        document.getElementById('valor-resultado').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});