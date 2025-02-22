const h1Selecionado= document.documentElement.querySelector('h1');

h1Selecionado.addEventListener('click', function () {
    h1Selecionado.style.color = h1Selecionado.style.color === 'blue' ? 'red' : 'blue';
});

