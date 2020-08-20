function triangulos(a,b,c) {
    if(a==b && a==c){
        return("triangulo equilatero")

    }else if(a==b || a==c){
        return("triangulo isoceles")
    }else{
        return("triangulo escaleno")
    }

}
console.log(triangulos(6, 6, 6));
console.log(triangulos(2, 6, 9));
console.log(triangulos(8, 8, 4));
