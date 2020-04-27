function enviar() {

    var percentual_inss;
    var percentual_irrf;

    var nome_pessoa = document.getElementById("txt").value;
    var valor_salario = Number(document.getElementById("bruto").value);

    if (valor_salario === 0 ) {
        alert("O valor do salario bruto deve ser informado!");
        return;
    }

    if (valor_salario === 1045.00) {
        percentual_inss = 0.08;
    } else if (valor_salario >= 1045.01 && valor_salario <= 2089.60) {
        percentual_inss = 0.09;
    } else if (valor_salario >= 2089.61 && valor_salario <= 3134.40) {
        percentual_inss = 0.12;
    } else if (valor_salario >= 3134.41) {
        percentual_inss = 0.14;
    } else percentual_inss = 0;

    if (valor_salario >= 1903.99 && valor_salario <= 2826.65) {
        percentual_irrf = 0.075;
    } else if (valor_salario >= 2826.66 && valor_salario <= 3751.05) {
        percentual_irrf = 0.15;
    } else if (valor_salario >= 3751.06 && valor_salario <= 4664.68) {
        percentual_irrf = 0.23;
    } else if (valor_salario >= 4664.68) {
        percentual_irrf = 0.23;
    } else percentual_irrf = 0;

    if (percentual_inss === 0 && percentual_irrf === 0) {
        res.innerHTML = `Salario abaixo do salario minimo não pagam`;
    } else {
        var valor_inss = valor_salario * percentual_inss;
        var valor_irrf = valor_salario * percentual_irrf;
        var salario_liquido = valor_salario - valor_inss - valor_irrf;
        res.innerHTML = `ola ${nome_pessoa}, seu salario liquido é de: ${salario_liquido.toFixed(2).toString()}`
    }
}
