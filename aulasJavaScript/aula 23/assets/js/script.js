function calcular() {
    const boletim = document.getElementById('notas');
    const listaMaterias = boletim.getElementsByTagName('tr');

    for (let index = 0; index < listaMaterias.length; index++) {
        const materia = listaMaterias[index];
        const listaCelulas = materia.getElementsByTagName('td');

        const soma = calcSoma(parseFloat(celulas[1].textContent),
            parseFloat(listaCelulas[2].textContent),
            parseFloat(listaCelulas[3].textContent),
            parseFloat(listaCelulas[4].textContent));

        const media = calcMedia(parseFloat(listaCelulas[1].textContent),
            parseFloat(listaCelulas[2].textContent),
            parseFloat(listaCelulas[3].textContent),
            parseFloat(listaCelulas[4].textContent));
    }

    listaCelulas[5].textContent = soma.toLocaleString('pt-BR',
                                                { minimumFractionDigits: 2})
    listaCelulas[5].textContent = soma.toLocaleString('pt-BR',
                                                { minimumFractionDigits: 2})

    if(soma >= 60){
        listaCelulas[7].textContent = 'APROVADO';
    } else{
        listaCelulas[7].textContent = 'REPROVADO';
    }

}

function calcSoma() {
    let total = 0;
    for (let cont = 0; cont < arguments.length; cont++) {
        if (typeof arguments[cont] === 'number') {
            total += arguments[cont];
        }
    }
    return total;
}

function calcMedia() {
    const total = calcSoma(arguments[0],arguments[1],arguments[2],arguments[3]);
    const resultado = total / arguments.length;
    return resultado;
}
