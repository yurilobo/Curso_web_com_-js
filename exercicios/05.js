function valor(decimal){
    valorEmReais =`R$ ${decimal.toFixed(2).replace(".", ",")}`//o fixed limita o numero de casa decimais e o replace mantem o padrao de ,
    console.log(valorEmReais);
}
valor(0.2+0.1);