function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('div');
    cartao.className = 'flashcard';
  
    let front = document.createElement('div');
    front.className = 'front';
    front.innerHTML = `
      <h3>${categoria}</h3>
      <div class="cartao-pergunta question">
        <p>${pergunta}</p>
      </div>
    `;
  
    let back = document.createElement('div');
    back.className = 'back';
    back.innerHTML = `
      <div class="cartao-resposta answer">
        <p>${resposta}</p>
      </div>
    `;
  
    cartao.appendChild(front);
    cartao.appendChild(back);
  
    container.appendChild(cartao);
  
    cartao.addEventListener('click', () => {
      cartao.classList.toggle('flipped');
    });
  }
