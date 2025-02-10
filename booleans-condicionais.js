var condicional = (5-5) || (20+5) && (0+0);
console.log(condicional);

//resultado igual a 0 pois pegou o ultimo truth

function nomeCompleto (nome,sobrenome) {
var nome= "Alex" ;
var sobrenome = "Soares de Oliveira" ;
return `${nome} ${sobrenome}`
}


console.log(nomeCompleto())