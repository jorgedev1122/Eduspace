function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  if (!obj) return;
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;

    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("msg-count", 0, 13, 1000);
animateValue("faltas-count", 0, 5, 1200);
animateValue("tarefas-count", 0, 4, 1400);

// FUNÇÃO PARA ATUALIZAR DATA NA HOME
function updateHomeDate() {
  const dateEl = document.getElementById('home-date');
  if (!dateEl) return;
  
  const now = new Date();
  const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  
  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  
  dateEl.textContent = `${dayName}, ${date} de ${month} de ${year}`;
}

updateHomeDate();

// MODAIS HOME
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeAllModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => modal.classList.remove('active'));
}

// CARD MENSAGENS
document.getElementById('card-mensagens')?.addEventListener('click', () => {
  openModal('modal-mensagens');
  // Efeito ripple
  const event = new MouseEvent('click', {bubbles: true});
  document.getElementById('card-mensagens').dispatchEvent(event);
});

// CARD FALTAS
document.getElementById('card-faltas')?.addEventListener('click', () => {
  openModal('modal-faltas');
});

// CARD TAREFAS
document.getElementById('card-tarefas')?.addEventListener('click', () => {
  // Simula clique na aba de tarefas
  const tarefasLink = document.querySelectorAll('.sidebar li')[3];
  if (tarefasLink) tarefasLink.click();
});

// CARD DESEMPENHO
document.getElementById('card-desempenho')?.addEventListener('click', () => {
  openModal('modal-desempenho');
});

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});

// Expandir mensagem (simulado)
function expandirMensagem(elem) {
  if (elem.classList.contains('expanded')) {
    elem.classList.remove('expanded');
  } else {
    document.querySelectorAll('.mensagem-item').forEach(m => m.classList.remove('expanded'));
    elem.classList.add('expanded');
  }
}

// Adicionar efeito ripple nos cards
document.querySelectorAll('.dashboard-card').forEach(card => {
  card.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(0, 255, 255, 0.5)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple-animation 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

const items = document.querySelectorAll(".sidebar li");
const panels = document.querySelectorAll(".panel");

items.forEach((item, index) => {
  item.addEventListener("click", () => {

    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    panels.forEach(p => p.classList.remove("active"));
    panels[index].classList.add("active");

  });
});

/* Humor baseado no desempenho */
const mood = document.getElementById("mood");
let media = 7.5;

if(media >= 7){
  mood.textContent = "😄";
} else {
  mood.textContent = "😢";
}

// Barras de progresso dinâmicas em notas
const notes = document.querySelectorAll(".note-card");
notes.forEach(note => {
  const progressEl = note.querySelector(".progress");
  const progressValue = Number(note.getAttribute("data-progress") || 0);
  const status = note.getAttribute("data-status");

  progressEl.style.width = `${progressValue}%`;
  const statusEl = note.querySelector(".status");

  if (statusEl) {
    if (status === "good") {
      statusEl.classList.add("good");
      statusEl.querySelector("span").style.background = "#4ade80";
    } else if (status === "ok") {
      statusEl.classList.add("ok");
      statusEl.querySelector("span").style.background = "#facc15";
    } else {
      statusEl.classList.add("improve");
      statusEl.querySelector("span").style.background = "#f87171";
    }
  }
});

// micro-interação: hover nos cards de material com brilho leve
const apps = document.querySelectorAll('.app');
apps.forEach(app => {
  app.addEventListener('mousemove', e => {
    const rect = app.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    app.style.setProperty('--mouse-x', `${x}px`);
    app.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Tarefas em cards e painel de confirmação
const tarefaPanel = document.getElementById('tarefas');
const detalhePanel = document.getElementById('tarefa-detalhe');
const taskTitle = document.getElementById('task-title');
const taskSubtitle = document.getElementById('task-subtitle');
const backButton = document.getElementById('back-to-tasks');

const taskCards = document.querySelectorAll('.task-card');
taskCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    const materia = card.querySelector('p strong').textContent;
    const professor = card.querySelectorAll('p')[1].textContent;

    taskTitle.textContent = title;
    taskSubtitle.textContent = `${materia} • ${professor}`;

    tarefaPanel.classList.remove('active');
    detalhePanel.classList.add('active');
  });
});

backButton.addEventListener('click', () => {
  detalhePanel.classList.remove('active');
  tarefaPanel.classList.add('active');
});

/* ============================================== */
/* NOVA SEÇÃO: TAREFAS COM ABAS, FILTROS E CARDS */
/* ============================================== */

// Dados das tarefas com mais detalhes
const tarefasData = {
  1: {
    titulo: "Equações do 1º Grau",
    professor: "Prof. Silva",
    materia: "Matemática",
    prazo: "30/03/2026",
    dificuldade: "Difícil",
    enunciado: "Resolva as seguintes equações do 1º grau e mostre o passo a passo:",
    multipla: "Qual é a solução de 3x + 5 = 20?",
    opcoes: {
      a: "x = 3",
      b: "x = 5",
      c: "x = 7",
      d: "x = 10"
    },
    correta: "b"
  },
  2: {
    titulo: "Redação Dissertativa",
    professor: "Profa. Ramos",
    materia: "Português",
    prazo: "02/04/2026",
    dificuldade: "Médio",
    enunciado: "Escreva uma redação dissertativa sobre o tema: 'A importância da tecnologia na educação'",
    multipla: "Qual é a estrutura de uma redação dissertativa?",
    opcoes: {
      a: "Introdução, desenvolvimento e conclusão",
      b: "Apenas apresentação do tema",
      c: "Duas partes: desenvolvimento e conclusão",
      d: "Sem estrutura definida"
    },
    correta: "a"
  },
  5: {
    titulo: "Conversation Practice",
    professor: "Profa. Lucas",
    materia: "Inglês",
    prazo: "29/03/2026",
    dificuldade: "Médio",
    enunciado: "Practice a conversation about daily routines with proper English grammar.",
    multipla: "How do you say 'rotina diária' in English?",
    opcoes: {
      a: "Daily routine",
      b: "Day routine",
      c: "Routine day",
      d: "Every day routine"
    },
    correta: "a"
  }
};

// ABAS DE STATUS
const tabBtns = document.querySelectorAll('.tab-btn');
const tarefasGrids = document.querySelectorAll('.tarefas-grid');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active de todos os tabs
    tabBtns.forEach(b => b.classList.remove('active'));
    tarefasGrids.forEach(g => g.style.display = 'none');

    // Adiciona active ao tab clicado
    btn.classList.add('active');
    const tabName = btn.getAttribute('data-tab');
    document.getElementById(`tarefas-${tabName}`).style.display = 'grid';
  });
});

// FILTRO POR MATÉRIA
const filterSelect = document.getElementById('materia-filter');
filterSelect.addEventListener('change', (e) => {
  const materiaFilter = e.target.value;

  tarefasGrids.forEach(grid => {
    const cards = grid.querySelectorAll('.task-card');
    cards.forEach(card => {
      const materia = card.getAttribute('data-materia');
      if (materiaFilter === '' || materia === materiaFilter) {
        card.style.display = 'grid';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// CLIQUE EM CARD DE TAREFA - NOVO
const taskCardsNew = document.querySelectorAll('.task-card');
const tarefasContainer = document.getElementById('tarefas');
const detalheContainer = document.getElementById('tarefa-detalhe');
const backTarefaBtn = document.getElementById('back-tarefa');

taskCardsNew.forEach(card => {
  card.addEventListener('click', () => {
    const taskId = card.getAttribute('data-id');
    const taskData = tarefasData[taskId];

    if (taskData) {
      // Preenche dados
      document.getElementById('detalhe-titulo').textContent = taskData.titulo;
      document.getElementById('detalhe-professor').textContent = taskData.professor;
      document.getElementById('detalhe-materia').textContent = taskData.materia;
      document.getElementById('detalhe-prazo').textContent = taskData.prazo;
      document.getElementById('detalhe-dificuldade').textContent = taskData.dificuldade;
      document.getElementById('detalhe-enunciado-texto').textContent = taskData.enunciado;
      document.getElementById('texto-multipla').textContent = taskData.multipla;

      // Preenche opções múltipla escolha
      const opcoesDiv = document.querySelector('.opcoes-multipla');
      opcoesDiv.innerHTML = '';
      Object.entries(taskData.opcoes).forEach(([key, value]) => {
        const btn = document.createElement('button');
        btn.className = 'opcao';
        btn.textContent = `${key.toUpperCase()}) ${value}`;
        btn.setAttribute('data-opcao', key);
        btn.setAttribute('data-id-tarefa', taskId);

        btn.addEventListener('click', () => {
          const feedback = document.getElementById('feedback-multipla');
          if (key === taskData.correta) {
            feedback.innerHTML = '✓ Resposta correta!';
            feedback.className = 'feedback sucesso';
            btn.classList.add('correta');
          } else {
            feedback.innerHTML = '✗ Resposta incorreta. Tente novamente!';
            feedback.className = 'feedback erro';
            btn.classList.add('incorreta');
          }
          feedback.style.display = 'block';

          // Desabilita outros botões
          opcoesDiv.querySelectorAll('.opcao').forEach(o => {
            o.style.pointerEvents = 'none';
            o.style.opacity = '0.6';
          });
          btn.style.pointerEvents = 'auto';
          btn.style.opacity = '1';
        });

        opcoesDiv.appendChild(btn);
      });

      // Limpa resposta anterior
      document.getElementById('resposta-livre').value = '';
      document.getElementById('feedback-multipla').style.display = 'none';
      document.getElementById('feedback-multipla').innerHTML = '';

      // Muda de painel (apenas mostra/esconde)
      const tarefasGrid = document.querySelector('.tarefas-container');
      tarefasGrid.style.display = 'none';
      detalheContainer.style.display = 'block';
    }
  });
});

// BOTÃO VOLTAR
backTarefaBtn.addEventListener('click', () => {
  const tarefasGrid = document.querySelector('.tarefas-container');
  tarefasGrid.style.display = 'block';
  detalheContainer.style.display = 'none';
});

// ENVIAR TAREFA
const enviarBtn = document.getElementById('enviar-tarefa');
enviarBtn.addEventListener('click', () => {
  const respostaLivre = document.getElementById('resposta-livre').value;
  const feedbackMultipla = document.getElementById('feedback-multipla');

  // Valida resposta livre
  if (respostaLivre.trim() === '') {
    alert('Por favor, preencha a resposta livre antes de enviar!');
    return;
  }

  // Valida múltipla escolha respondida
  if (feedbackMultipla.textContent === '') {
    alert('Por favor, responda a questão de múltipla escolha antes de enviar!');
    return;
  }

  // Animação de envio
  enviarBtn.classList.add('enviando');
  enviarBtn.disabled = true;
  document.getElementById('status-envio').textContent = 'Enviando...';
  document.getElementById('barra-progresso').style.width = '100%';

  setTimeout(() => {
    enviarBtn.classList.remove('enviando');
    enviarBtn.disabled = false;
    document.getElementById('status-envio').textContent = '✓ Resposta enviada com sucesso!';
    document.getElementById('barra-progresso').style.width = '100%';
  }, 1500);
});