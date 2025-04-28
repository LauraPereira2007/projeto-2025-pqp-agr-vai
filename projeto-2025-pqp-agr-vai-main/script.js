
document.getElementById('accessibility-button').addEventListener('click', function() {
  document.body.classList.toggle('high-contrast');
  alert('Modo de alto contraste ativado!');
});

// A função de alto contraste altera a cor de fundo e o texto para maior contraste
document.body.classList.add('high-contrast');

// Adiciona o modo de contraste no CSS
document.styleSheets[0].insertRule('body.high-contrast { background-color: black; color: yellow; }', 0);