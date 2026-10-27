const statusDetail = document.querySelector('#statusDetail');
const statusCopy = {
  agora: 'Consulte disponibilidade para a sua região. A confirmação é feita pela equipe.',
  reposicao: 'Veja a previsão compartilhada pela equipe e confirme os modelos antes de planejar o pedido.'
};
document.querySelectorAll('[data-status]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-status]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    statusDetail.textContent = statusCopy[button.dataset.status];
  });
});

const form = document.querySelector('#demoForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const region = document.querySelector('#region').value.trim();
  const dealer = document.querySelector('#dealer').checked;
  const result = document.querySelector('#formResult');
  if (!region) return;
  result.textContent = `Prévia de consulta: ${dealer ? 'lojista' : 'interessado'} da região ${region} quer conhecer a linha de mobilidade elétrica. Nada foi enviado.`;
});
