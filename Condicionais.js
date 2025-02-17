var possuiGraduacao = true;
var possuiCertificacao = false;
var analfabeto = true;

if (!possuiGraduacao) {
    
    console.log("Você não é um graduado");
} 
else if (possuiCertificacao) { 
    console.log("Você possui certificação");
}
 else if (analfabeto) {
    console.log("Você é analfabeto");
} 
else {
    console.log("Você não se encaixa em nenhuma das categorias anteriores");
}

