const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (evento) => {
 evento.preventDefault();
 console.log(evento);
 const nome = evento.target.nome.value;
 const quantidade = evento.target.quantidade.value;
 criaElemento(nome, quantidade);

 
 
});

function criaElemento(nome, quantidade) // FUNÇÃO PARA CRIAR O ELEMENTO NOVO
{
    //cria um li para colocar dentro da ul
    const novoItem = document.createElement('li');
          novoItem.classList.add('item'); //adiciona uma classe

          //cria um novo elemento strong para ser colocado dentro de novoItem
    const tagStrong           = document.createElement('strong');
          tagStrong.innerHTML = quantidade;
          novoItem.append(tagStrong, nome);
          lista.appendChild(novoItem);
}