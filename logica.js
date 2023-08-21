const acrescentarDado = function() {
  //Entrada de Dados
  const codigo = document.querySelector('#codigo').value;
  const produto = document.querySelector('#produto').value;
  const quantidade = Number(document.querySelector('#quantidade').value);
  const precoUnitario = Number(document.querySelector('#preco').value);
  const total = precoUnitario*quantidade;

  //Procesamento
  //Tabela
  const elemento = document.getElementById('table');
  const novoElemento = document.createElement('tr');

  novoElemento.innerHTML = `<td id="tabela-codigo">${codigo}</td>
  <td>${produto}</td>
  <td>${quantidade}</td>
  <td>${precoUnitario}</td>
  <td>${total}</td>`
  elemento.appendChild(novoElemento);

  //Saída
  const saidaDados = Array.from(document.querySelectorAll('input'));
  saidaDados.map((input) => {
    input.value = '';
    return input;
  }).shift().focus();
};

