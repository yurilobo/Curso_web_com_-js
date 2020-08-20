function jurosSimples (capitalInicial,juros,tempo){
    console.log(`Juros Simples: ${capitalInicial + (capitalInicial * juros * tempo)}`)
}
jurosSimples(100,10/100,2);

function jurosCompostos(capitalInicial,juros,tempo){
    return capitalInicial*(1*juros)**tempo
}
console.log(jurosCompostos(100, 10/100, 2));
