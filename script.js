function MensagemPersonalizada() {
    // Obtém a hora atual
    const agora = new Date();
    const hora = agora.getHours();

    // Formata a mensagem com base na hora
    let mensagem;
    if (hora >= 5 && hora < 12) {
        mensagem = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }

    // Formata a data e hora
    const formatador = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const dataFormatada = formatador.format(agora);

        // Exibe a mensagem completa
        System.out.println(mensagem + " É ótimo te ver aqui! Assinado: Jú");
        System.out.println("Data e hora: " + dataFormatada);
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  alert('Vou te contar um pedacinho da minha história!');
  // Adicione aqui a ação que você deseja que o botão execute
  // window.location.href = 'https://jusouzacris.github.io/projetosinicais.com/';
  const agora = new Date();
  const hora = agora.getHours();
  let mensagem;

  if (hora >= 5 && hora < 12) {
    mensagem = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde!";
  } else {
    mensagem = "Boa noite!";
  }

  const formatador = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const dataFormatada = formatador.format(agora);

  alert(mensagem + " É ótimo te ver aqui! Assinado: Jú\nData e hora: " + dataFormatada);
  window.location.href = 'https://jusouzacris.github.io/projetosinicais.com/';
});