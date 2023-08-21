const acrescentarDado = function() {
  //Entrada de Dados
  const codigo = document.querySelector('#codigo').value;
  const produto = document.querySelector('#produto').value;
  const quantidade = document.querySelector('#quantidade').value;
  const precoUnitario = document.querySelector('#preco').value;
  const total = precoUnitario*quantidade;
  const elemento = document.getElementById('table');
  const novoElemento = document.createElement('tr');

  //Procesamento
  novoElemento.innerHTML = `<td id="tabela-codigo">${codigo}</td>
  <td>${produto}</td>
  <td>${quantidade}</td>
  <td>${precoUnitario}</td>
  <td>${total}</td>`

  //Saída
  elemento.appendChild(novoElemento);
};

