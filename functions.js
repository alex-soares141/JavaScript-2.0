//Função nome completo String concatenada
function nomeCompleto() {
    return "Alex " + "Soares Oliveira" ;

}
console.log(nomeCompleto())

// calculando idade
function Idade (){
    
    return 2025-1994
}
console.log(Idade())

//calculando IMC

function IMC (altura , peso){
    var imc = peso / (altura * altura);
    return imc
}
console.log(IMC(1.63, 63))

//funçao que retorna alguma cor

function corFavorita (cor){
if (cor == "Azul")
    return console.log("Gosta de Yamaha");
else if (cor == "Vermelho")
    return console.log("Gosta de Honda");
else (cor =="Verde")
    return console.log("Gosta de Kawasaki")
}

console.log(corFavorita("Vermelho"))