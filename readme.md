# 🎓 EduSpace - Dashboard Escolar Moderno

- [Acesse online!](https://jorgedev1122.github.io/Eduspace/)
  Um **dashboard educacional interativo e moderno** desenvolvido com HTML, CSS e JavaScript puro. Oferece uma experiência de usuário premium para alunos gerenciarem suas atividades acadêmicas.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Tecnologias](#tecnologias)
- [Arquivo por Arquivo](#arquivo-por-arquivo)
- [Recursos Visuais](#recursos-visuais)
- [Futuras Melhorias](#futuras-melhorias)

---

## 🌟 Visão Geral

**EduSpace** é uma plataforma educacional completa que oferece aos alunos uma interface intuitiva e moderna para:

- Acompanhar mensagens e comunicados
- Gerenciar faltas e presença
- Organizar tarefas por status
- Visualizar desempenho acadêmico
- Acessar materiais de estudo

### Características Principais

✨ **Design Moderno** com Glassmorphism e efeitos Neon  
⚡ **Interativo** com animações suaves e feedback visual  
📱 **Responsivo** adaptado para diferentes tamanhos de tela  
🚀 **Performático** sem dependências externas (JavaScript puro)  
🎨 **Visual Premium** com ícones Ionicons e gradientes

---

## 🎯 Funcionalidades

### 1. **HOME - Dashboard Principal**

Dashboard interativo com 4 cards principais:

#### 📧 Card de Mensagens

- Exibe **13 mensagens** não lidas
- Modal com lista de mensagens recebidas
- Cada mensagem mostra:
  - Nome do remetente com avatar
  - Assunto
  - Preview do conteúdo
  - Data de recebimento
- Efeito hover com elevação e brilho

#### ⚠️ Card de Faltas

- Mostra **5 faltas** neste mês
- Modal detalhado com:
  - Porcentagem de presença (92%)
  - Barra de progresso visual
  - Lista de dias faltados com matérias
  - Aviso se presença < 75%
- Cores visuais: verde (bom), amarelo (aviso), vermelho (crítico)

#### 📋 Card de Tarefas

- Exibe **4 tarefas** pendentes
- Clique redireciona para aba de tarefas
- Integração suave com navegação SPA

#### 🎯 Card de Desempenho

- Status com emoji (😊 Bom)
- Média geral: **8.1**
- Modal com resumo de notas por disciplina
- Gráfico visual comparativo

**Microinterações:**

- ✅ Animação de contagem nos números (0 → valor)
- ✅ Ripple effect ao clicar
- ✅ Shimmer efeito nos cards
- ✅ Pulsing indicator em cada card
- ✅ Data dinâmica (atualiza automaticamente)

---

### 2. **MATERIAIS - Hub de Recursos**

Acesso a 5 plataformas educacionais:

- 📚 **Alura** - Plataforma de cursos online
- 📁 **Materiais Digitais** - Repositório da secretaria
- 💬 **Speak** - Prática de idiomas
- 📖 **Leia SP** - Biblioteca virtual
- 🧮 **Matfic** - Matemática interativa

**Layout:**

- Grid 2 colunas responsivo
- Cards grandes com ícones neon
- Último card centralizado
- Links funcionais ao vivo

---

### 3. **NOTAS - Acompanhamento Acadêmico**

Visualização de notas em **12 disciplinas**:

- Arte (9.4)
- Ciências (8.7)
- Educação Financeira (7.3)
- Educação Física (9.0)
- Geografia (8.1)
- História (8.8)
- Língua Inglesa (8.3)
- Língua Portuguesa (8.5)
- Matemática (9.5)
- Projeto de Vida (6.8)
- Redação e Leitura (7.9)
- Tecnologia e Inovação (8.2)

**Por Card:**

- ✨ Barra de progresso animada
- 🎯 Status colorido: Bom (verde), OK (amarelo), Precisa Melhorar (vermelho)
- 📊 Última avaliação exibida
- 🎨 Design with glassmorphism

---

### 4. **TAREFAS - Gerenciador Completo**

Interface profissional para gerenciar tarefas escolares:

#### Organização por Status

- **Pendentes** (4 tarefas)
- **Em Andamento** (2 tarefas)
- **Concluídas** (2 tarefas)

#### Funcionalidades

- 🔍 **Filtro por Matéria** (11 opções)
- 📑 **Abas Dinâmicas** com ícones ionicons
- 📊 **Grid Responsivo** com animações
- 🎯 **Indicador de Dificuldade** (Fácil/Médio/Difícil)

#### Cada Card de Tarefa Contém

- Título da tarefa
- Nome do professor
- Tag de matéria (colorida)
- Prazo com indicador urgência
- Status visual
- Barra de progresso

#### Ao Clicar em Uma Tarefa

Abre painel detalhado com:

- **Enunciado Completo** da tarefa
- **Informações:**
  - Professor responsável
  - Matéria
  - Prazo
  - Nível de dificuldade

##### Tipos de Questões

1. **Múltipla Escolha:**
   - 4 opções (A, B, C, D)
   - Feedback instantâneo (verde/vermelho)
   - Desabilita opções após responder

2. **Resposta Livre:**
   - Campo textarea grande
   - Validação de preenchimento
   - Feedback visual

##### Envio de Resposta

- ⭐ Animação de envio "pulsing"
- ✅ Barra de progresso animada
- 📬 Mensagem de confirmação
- 🔄 Reset do formulário

---

### 5. **BOLETIM - Notas Consolidadas**

Tabela com **12 disciplinas** e notas:

- Visualização clara em tabela
- Cabeçalhos alinhados à esquerda
- Linhas alternadas para melhor legibilidade
- Todas as matérias do currículo

---

### 6. **AGENDA - Eventos Importante**

Lista de compromissos escolares:

- 📌 Prova - 30/03
- 📌 Trabalho - 05/04

---

## 📂 Estrutura do Projeto

```
Sala do futuro V2/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos CSS (900+ linhas)
├── script.js           # Lógica JavaScript (300+ linhas)
└── README.md           # Este arquivo
```

**Tamanho Total:**

- HTML: ~900 linhas
- CSS: ~900 linhas
- JavaScript: ~300 linhas

---

## 🚀 Como Usar

### Abrir o Projeto

1. Navegue até a pasta `Sala do futuro V2`
2. Abra `index.html` em seu navegador
3. Todos os recursos carregarão automaticamente

### Navegar Entre Abas

- Clique nos itens da **sidebar esquerda**:
  - 🏠 Home
  - 📚 Materiais
  - 📝 Notas
  - 📋 Tarefas
  - 📊 Boletim
  - 📅 Agenda

### Interagir com Modais

- **Home:** Clique nos 4 cards para abrir modais
- **Tarefas:** Clique em um card de tarefa para abrir detalhes
- **Fechar:** ESC ou clique no botão X

### Filtrar Tarefas

- Na aba Tarefas, use o seletor "Filtrar por Matéria"
- As tarefas filtram em tempo real

---

## 🛠️ Tecnologias

### Linguagens

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com animações
- **JavaScript Vanilla** - Lógica sem dependências

### Bibliotecas Externas

- **Ionicons 7.1.0** - Biblioteca de ícones
  - CDN: `https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js`

### Técnicas Utilizadas

- ✨ **Glassmorphism** - Cards com fundo translúcido
- 🌈 **Gradientes Neon** - Cores azul-ciano (#00f7ff)
- 📱 **Grid Responsivo** - `auto-fit, minmax()`
- ⚡ **Animações CSS** - Fade, Slide, Pop, Ripple
- 🎯 **Efeitos Hover** - Elevação, brilho, transformações
- 📊 **Progress Bars** - Animadas com transições suaves

---

## 📄 Arquivo por Arquivo

### `index.html`

Estrutura completa com:

- **Sidebar** com navegação
- **Painel HOME** com 4 cards + 3 modais
- **Painel MATERIAIS** com 5 links
- **Painel NOTAS** com 12 disciplinas
- **Painel TAREFAS** com filtro, abas e cards
- **Painel BOLETIM** com tabela
- **Painel AGENDA** com lista
- **Scripts & Ionicons** carregados ao final

### `style.css`

Componentes principais:

```
- Variáveis globais (background, cores)
- Sidebar styling (width: 220px)
- Layout flexbox/grid
- Dashboard cards (4 cards animados)
- Modais (overlay, content, header, body)
- Task cards (grid, status, difficulty)
- Animações (@keyframes)
- Responsive media queries
```

### `script.js`

Funcionalidades:

```
- animateValue() → Anima números de 0 ao valor final
- updateHomeDate() → Atualiza data dinâmica
- openModal() / closeAllModals() → Controle de modais
- Event listeners nos cards (click handlers)
- Filtro de tarefas por matéria
- Expandir mensagens
- Ripple effect nos cards
- Navegação entre abas
```

---

## 🎨 Recursos Visuais

### Paleta de Cores

- **Fundo Principal:** `#0f172a` (azul-escuro)
- **Gradiente:** `135deg #0f172a → #1e293b`
- **Neon Primária:** `#00f7ff` (azul-ciano)
- **Secundária:** `#06b6d4` (ciano)
- **Acentos:**
  - Verde: `#4ade80` (sucesso)
  - Amarelo: `#facc15` (aviso)
  - Vermelho: `#f87171` (erro)

### Ícones Ionicons Utilizados

- `home-outline` - Home
- `library-outline` - Materiais
- `book-outline` - Notas
- `clipboard-outline` - Tarefas
- `bar-chart-outline` - Boletim
- `calendar-outline` - Agenda
- `mail` - Mensagens
- `alert-circle` - Faltas
- `trending-up` - Desempenho
- E mais...

### Animações

- **popIn** - Cards aparecem com scale
- **slideDown** - Header desce suavemente
- **slideUp** - Modais sobem ao abrir
- **shimmer** - Brilho passando nos cards
- **pulse** - Pulsação nos indicadores
- **ripple** - Onda ao clicar

---

## 🔮 Futuras Melhorias

### Curto Prazo

- [ ] Integração com API de backend
- [ ] Autenticação de usuário (login)
- [ ] Sistema de notificações push
- [ ] Dark mode / Light mode toggle
- [ ] Mais gráficos de desempenho (Chart.js)

### Médio Prazo

- [ ] Perfil do aluno editável
- [ ] Sistema de streaks (dias estudando)
- [ ] Gamificação (XP, medalhas, ranking)
- [ ] Chat com professores
- [ ] Agenda sincronizada com calendário

### Longo Prazo

- [ ] App mobile (React Native/Flutter)
- [ ] Sistema de avaliação por pares
- [ ] Integração com plataformas externas
- [ ] Machine Learning para recomendações
- [ ] Sistema de comunicação em tempo real

---

## 📝 Notas de Desenvolvimento

### Performance

- Sem bibliotecas pesadas (apenas Ionicons)
- CSS otimizado com flexbox/grid
- JavaScript sem loops desnecessários
- Animações em CSS (não JS)

### Acessibilidade

- Estrutura HTML semântica
- ARIA labels onde necessário
- Contraste suficiente de cores
- Keyboard navigation (ESC para fechar modais)

### Responsividade

- Mobile-first approach
- Grid auto-fit para adaptação
- Sidebar colapsável em small screens (preparado)
- Modais 90% width em mobile

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- (Ionicons 7.1.0 suporta todos os navegadores modernos)

---

## 👤 Autoria

**Desenvolvido com:** HTML5, CSS3, JavaScript Vanilla + Ionicons

---

## 📄 Licença

Este projeto é fornecido como-é para fins educacionais.

---

## 💡 Dicas e Truques

### Dica 1: Temas

Todos os cores neon podem ser alteradas em `style.css`. Procure por `#00f7ff` para mudar a cor primária.

### Dica 2: Adicionar Nova Matéria

1. Vá para seção **NOTAS** em `index.html`
2. Copie um `<article class="note-card">` existente
3. Altere `data-progress`, `data-status`, e textos

### Dica 3: Personalizar Mensagens

No `script.js`, procure por `tarefasData = {...}` e adicione mais objetos com dados de tarefas.

---

## 🆘 Troubleshooting

### Ícones não aparecem?

- Verifique conexão com internet (Ionicons vem de CDN)
- Abra console (F12) e procure por erros

### Modais não abrem?

- Verifique se JavaScript está habilitado
- Procure por erros no console (F12)

### Animações lentas?

- Pode ser performance do navegador
- Tente fechar outras abas
- Limpe cache (Ctrl+Shift+Delete)

---

**Aproveite o EduSpace! 🚀**

Last Updated: 25 de março de 2026
