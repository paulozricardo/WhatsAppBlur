const DEFAULTS = {
  icon: 'never',
  name: 'never',
  message: 'partial',
  chatMessages: 'partial',
  blurIntensity: 5
};

function applySettings(settings) {
  const body = document.body;

  // Remover classes antigas
  body.classList.remove(
    'blur-icon-always', 'blur-icon-partial', 'blur-icon-never',
    'blur-name-always', 'blur-name-partial', 'blur-name-never',
    'blur-message-always', 'blur-message-partial', 'blur-message-never',
    'blur-chat-always', 'blur-chat-partial', 'blur-chat-never'
  );

  // Adicionar classes novas
  body.classList.add(`blur-icon-${settings.icon}`);
  body.classList.add(`blur-name-${settings.name}`);
  body.classList.add(`blur-message-${settings.message}`);
  body.classList.add(`blur-chat-${settings.chatMessages}`);

  // Aplicar intensidade do blur via variavel CSS
  document.documentElement.style.setProperty('--blur-intensity', settings.blurIntensity + 'px');
}

// Carregar configuracoes iniciais
chrome.storage.sync.get(DEFAULTS, applySettings);

// Escutar mudancas nas configuracoes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') {
    chrome.storage.sync.get(DEFAULTS, applySettings);
  }
});

// Toggle de visibilidade ao dar duplo clique nas mensagens do chat
document.addEventListener('dblclick', (e) => {
  const row = e.target.closest('#main div[role="row"]');
  if (row) {
    row.classList.toggle('blur-revealed');
  }
});

// Observar mudancas no chat para aplicar blur com delay
// Isso permite que o WhatsApp faca o scroll antes do blur ser aplicado
let chatBlurTimeout = null;
let lastChatId = null;

const observer = new MutationObserver(() => {
  // Pegar o nome/titulo do chat atual como identificador
  const chatTitle = document.querySelector('#main header span[title]');
  const chatId = chatTitle ? chatTitle.getAttribute('title') : null;

  if (chatId && chatId !== lastChatId) {
    lastChatId = chatId;

    // Remover blur temporariamente
    document.body.classList.add('blur-chat-loading');

    // Aplicar blur apos delay maior para garantir que o scroll aconteceu
    clearTimeout(chatBlurTimeout);
    chatBlurTimeout = setTimeout(() => {
      document.body.classList.remove('blur-chat-loading');
    }, 800);
  }
});

// Observar mudancas no DOM para detectar troca de chat
observer.observe(document.body, { childList: true, subtree: true });
