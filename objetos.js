//Criando um objeto
var pessoa = {
    Nome: "Alex",
    Profissao: "Desenvolvedor",
    idade: 30,
    apresentar(nome) {
        return `Nome: ${this.Nome}`;
    },
    fazoque (profissao) {
        return `Ele é: ${this.Profissao}`;
    }
};

console.log(pessoa.apresentar()); // Chama a função apresentar para exibir o nome
console.log(pessoa.fazoque());   // Chama a função apresentar para exibir o nome

// dobrando a altura da pessoa2
var pessoa2 = {
    altura: 1.63,
    peso : 63,

    dobroaaltura(){
        return this.altura * 2;
    }
}
pessoa2.altura = 2.00 // definindo uma nova altura ou seja setando

console.log(pessoa2.dobroaaltura());


