quantLitros = document.getElementById("quant-litros");//usei
combustivelEscolhi = document.getElementById("combustivel-escolhido");//usei
valorLitros = document.getElementById("valor-litro");//usei
desconto = document.getElementById("desconto-mensagem");//usei
valorTotal = document.getElementById("valor-total-combustivel");//usei


// criei duas variaveis pra poder ficar mais facil mudar o valor dos combustiveis caso precise
const valorAlcool = 4.90;
const valorGasolina = 6.80;

function fazTudo() {
    
}


function verificacaoInputVazio() {
    if (document.getElementById('inputId').value.trim() === "") {
        alert('Nenhuma quantidade de litros digitada !!!');
        return;
    } else if (document.getElementById('inputId').value < 1.00) {
        alert('A quantidade minima é de pelo menos 1 litro !!!');
    } else {
        verificaCombustivelEscolhido();
    }
}

function verificaCombustivelEscolhido() {
    if (document.getElementById('select-comb').value === 'Álcool') {
        combustivelEscolhi.innerText = `Você escolheu ${document.getElementById('select-comb').value}`;
        valorLitros.innerText = `Valor do litro R$${valorAlcool.toFixed(2)}`;
        calculaDescontoAlcool();
    } else if (document.getElementById('select-comb').value === 'Gasolina') {
        combustivelEscolhi.innerText = `Você escolheu Gasolina`;
        valorLitros.innerText = `Valor do litro R$${valorGasolina.toFixed(2)}`;
        calculaDescontoGasolina();
    }
}

function calculaDescontoGasolina() {
    if (document.getElementById('inputId').value > 20) {
        quantLtsGasolina = document.getElementById('inputId').value;
        descontoFinal = Number(quantLtsGasolina) * valorGasolina * 0.94;
        desconto.innerText = `Desconto de 6%`;
        quantLitros.innerText = `Quantidade de litro vendidos: ${quantLtsGasolina}`;
        valorTotal.innerText = `Valor total a pagar já com o desconto R$${descontoFinal.toFixed(2)}`;
    } else if (document.getElementById('inputId').value < 20) {
        quantLtsGasolina = document.getElementById('inputId').value;
        descontoFinal = Number(quantLtsGasolina) * valorGasolina * 0.96;
        desconto.innerText = `Desconto de 4%`;
        quantLitros.innerText = `Quantidade de litro vendidos: ${quantLtsGasolina}`;
        valorTotal.innerText = `Valor total a pagar já com o desconto R$${descontoFinal.toFixed(2)}`;
    }
}

function calculaDescontoAlcool() {
    if (document.getElementById('inputId').value > 20) {
        quantLtsAlcool = document.getElementById('inputId').value;
        descontoFinal = Number(quantLtsAlcool) * valorAlcool * 0.95;
        desconto.innerText = `Desconto de 5%`;
        quantLitros.innerText = `Quantidade de litro vendidos: ${quantLtsAlcool}`;
        valorTotal.innerText = `Valor total a pagar já com o desconto R$${descontoFinal.toFixed(2)}`;
    } else if (document.getElementById('inputId').value < 20) {
        quantLtsAlcool = document.getElementById('inputId').value;
        descontoFinal = Number(quantLtsAlcool) * valorAlcool * 0.97;
        desconto.innerText = `Desconto de 3%`;
        quantLitros.innerText = `Quantidade de litro vendidos: ${quantLtsAlcool}`;
        valorTotal.innerText = `Valor total a pagar já com o desconto R$${descontoFinal.toFixed(2)}`;
    }
}