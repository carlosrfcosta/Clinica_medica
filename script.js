// Controle do menu em telas pequenas
const botaoMenu = document.getElementById('menu-btn');
const listaMenu = document.getElementById('menu-lista');

botaoMenu.addEventListener('click', () => {
    listaMenu.classList.toggle('oculto');
});

// Fechar menu ao clicar em um link (mobile)
const linksMenu = listaMenu.querySelectorAll('a');
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            listaMenu.classList.add('oculto');
        }
    });
});

// Validação e envio do formulário
const formAgendamento = document.getElementById('form-agendamento');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

formAgendamento.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarregar a página

    // Pegar valores
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const data = document.getElementById('data').value;
    const servico = document.getElementById('servico').value;

    // Validação simples
    if (nome.length < 3) {
        alert('Por favor, insira seu nome completo.');
        return;
    }
    if (telefone.length < 10) {
        alert('Por favor, insira um telefone válido.');
        return;
    }
    if (!data) {
        alert('Por favor, escolha uma data.');
        return;
    }
    if (!servico) {
        alert('Por favor, selecione a especialidade.');
        return;
    }

    // Simulação de envio
    mensagemSucesso.classList.remove('oculto');
    formAgendamento.reset();

    // Esconder mensagem após 6 segundos
    setTimeout(() => {
        mensagemSucesso.classList.add('oculto');
    }, 6000);
});

// Rolagem suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function(e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});