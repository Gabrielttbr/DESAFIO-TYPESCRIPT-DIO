let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma')  as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')  as HTMLSpanElement;
let cont: number  = 0

campoSaldo.innerHTML = cont

function somarAoSaldo(soma): void {
    cont += Number(soma);
    campoSaldo.innerHTML = cont
}

function limparSaldo() {
    cont = 0
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
