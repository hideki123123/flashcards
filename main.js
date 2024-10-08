function criaCartao (categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `    
    <div class="cartao-conteudo flashcard">
    <h3>${categoria}</h3>
    <div class="cartao-pergunta question">
        <p>${pergunta}</p>
    </div>
    <div class="cartao-resposta answer">
        <p>${resposta}</p>
    </div>
</div>
    `
    container.appendChild(cartao)
}       
const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach((flashcard) => {
  flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
  });
});