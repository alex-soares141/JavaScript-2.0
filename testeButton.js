// Referenciado a meu botao no index

const botao = document.getElementById('btn')
const paragrafo = document.getElementById('text')

addEventListener('click',function(){
    paragrafo.textContent = 'Parabéns estamos evoluindo'
})

const botao2 = document.getElementById('cor')

addEventListener('click', function(){
    button = document.getElementById('cor').style.backgroundColor = 'red';
    this.addEventListener('click', function(){
        button = document.getElementById('cor').style.backgroundColor = 'white';
    })
})
