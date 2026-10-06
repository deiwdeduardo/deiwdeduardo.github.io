const badge = document.getElementById('badge-carrinho');
const somarCarrinho = () => { badge.textContent = Number(badge.textContent) + 1; };

// Botão "Adicionar ao carrinho" dos cartões (não abre o modal)
document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    somarCarrinho();
  });
});

// Preenche o modal com os dados do cartão clicado
document.getElementById('modalProduto').addEventListener('show.bs.modal', e => {
  const d = e.relatedTarget.dataset;
  document.getElementById('modalTitulo').textContent = d.nome;
  document.getElementById('modalImg').src = d.img;
  document.getElementById('modalImg').alt = d.nome;
  document.getElementById('modalDesc').textContent = d.desc;
  document.getElementById('modalAntigo').textContent = d.antigo;
  document.getElementById('modalPreco').textContent = d.preco;
});

document.getElementById('modalAdd').addEventListener('click', somarCarrinho);
