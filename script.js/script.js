const quantLitros = document.getElementById("quant-litros");//usei
const combustivelEscolhi = document.getElementById("combustivel-escolhido");//usei
const valorLitros = document.getElementById("valor-litro");//usei 
const desconto = document.getElementById("desconto-mensagem");//usei
const valorTotal = document.getElementById("valor-total-combustivel");//usei  

// criei duas variaveis pra poder ficar mais facil mudar o valor dos combustiveis caso precise
const valorAlcool = 4.90;
const valorGasolina = 6.80;

document.getElementById('inputId').focus();//ess linha aqui faz focar no input quando recarrego a pagina

function fazTudo() {
    const valor = document.getElementById('inputId').value;
    const combustivelSele = document.getElementById('select-comb').value;

    if (valor.trim() === "") {
        alert('Nenhuma quantidade de litros digitada !!!');
        return;
    } else if (valor < 1.00) {
        alert('A quantidade minima é de pelo menos 1 litro !!!');
        return;
    } else if (combustivelSele === 'Álcool' && valor > 20) {
        combustivelEscolhi.innerText = `Você escolheu ${combustivelSele}`;
        valorLitros.innerText = `Valor do litro R$${valorAlcool.toFixed(2)}`;
        quantLtsAlcool = valor;
        descontoFinal = Number(quantLtsAlcool) * valorAlcool * 0.95;
        desconto.innerText = `Desconto de 5%`;
        quantLitros.innerText = `Quantidade de litros vendidos: ${quantLtsAlcool}`;
        valorTotal.innerText = `Valor total a pagar já com o desconto R$${descontoFinal.toFixed(2)}`;
    } else if (combustivelSele === 'Álcool' && valor <= 20) {
        combustivelEscolhi.innerText = `Você escolheu ${combustivelSele}`;
        valorLitros.innerText = `Valor do litro R$${valorGasolina.toFixed(2)}`;
        quantLtsAlcool = valor;
        descontoFinal = Number(quantLtsAlcool) * valorAlcool * 0.97;
        desconto.innerText = `Desconto de 3%`;
        quantLitros.innerText = `Quantidade de litros vendidos: ${quantLtsAlcool}`;
        valorTotal.innerText = `Valor total a pagar já com o desconto R$${descontoFinal.toFixed(2)}`;
    } else if (combustivelSele === 'Gasolina' && valor > 20) {
        combustivelEscolhi.innerText = `Você escolheu Gasolina`;
        valorLitros.innerText = `Valor do litro R$${valorGasolina.toFixed(2)}`;
        quantLtsGasolina = valor;
        descontoFinal = Number(quantLtsGasolina) * valorGasolina * 0.94;
        desconto.innerText = `Desconto de 6%`;
        quantLitros.innerText = `Quantidade de litros vendidos: ${quantLtsGasolina}`;
        valorTotal.innerText = `Valor total a pagar já com o desconto R$${descontoFinal.toFixed(2)}`;
    } else if (combustivelSele === 'Gasolina' && valor <= 20) {
        combustivelEscolhi.innerText = `Você escolheu Gasolina`;
        valorLitros.innerText = `Valor do litro R$${valorGasolina.toFixed(2)}`;
        quantLtsGasolina = valor;
        descontoFinal = Number(quantLtsGasolina) * valorGasolina * 0.96;
        desconto.innerText = `Desconto de 4%`;
        quantLitros.innerText = `Quantidade de litros vendidos: ${quantLtsGasolina}`;
        valorTotal.innerText = `Valor total a pagar já com o desconto R$${descontoFinal.toFixed(2)}`;
    }
}

