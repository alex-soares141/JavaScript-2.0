// Adicionando eventos corretamente ao documento inteiro

document.addEventListener('click', function () {
    alert("Oi fela da puta");
});

document.addEventListener('click', function () { 
    alert("Você é burro e clicou de novo");
});
addEventListener('scroll', function (){
    console.log("Você esta escrolando, parabéns pelo seu avanço Alex")
})
// funcao terceira idade

function terceiraIdade (idade) {
   
    if (idade >=30){
        return true
    } 
    
    else {
        return console.log("Vocé ainda é jovem")
    } 
}

console.log(terceiraIdade(50))


//Template strings

function paisesVisitados (paisesFaltantes){
    var paisesVisitados = 193
    return `faltam vistar ${paisesVisitados - paisesFaltantes} para visitar`;
    console.log(paisesVisitados(50))
}

//Retornando uma template string
function dados (){
    var nome= "Alex"
    var idade = "30 anos"
    var nascido ="nascido em 1994"
    var cidade = "Em Guanhaães "
    var esporte ="Esporte favorito Motocross"
      return`${nome}, ${idade}, ${nascido}, ${cidade}, ${esporte}` 
}
console.log(dados())