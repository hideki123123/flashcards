function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao-conteudo" onclick="showAnswer(this)">
            <h3>${categoria}</h3>
            <div class="cartao-pergunta question">
            <p>${pergunta}</p>
        </div>
        <div class="cartao-resposta answer">
            <p>${resposta}</p>
        </div>
    </div>
    `;
    
    container.appendChild(cartao);
}
function showAnser(card){
    const answer = document.querySelector('.cartao-resposta');
    if(answer.computedStyleMap.display === 'none'){
        answer.computedStyleMap.display = 'block';

    }
    else{
        answer.computedStyleMap.display = 'none';
    }
}