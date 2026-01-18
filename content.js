const DEFAULTS = {
  icon: 'partial',
  name: 'partial',
  message: 'partial'
};

function applySettings(settings) {
  const body = document.body;

  // Remover classes antigas
  body.classList.remove(
    'blur-icon-always', 'blur-icon-partial', 'blur-icon-never',
    'blur-name-always', 'blur-name-partial', 'blur-name-never',
    'blur-message-always', 'blur-message-partial', 'blur-message-never'
  );

  // Adicionar classes novas
  body.classList.add(`blur-icon-${settings.icon}`);
  body.classList.add(`blur-name-${settings.name}`);
  body.classList.add(`blur-message-${settings.message}`);
}

// Carregar configuracoes iniciais
chrome.storage.sync.get(DEFAULTS, applySettings);

// Escutar mudancas nas configuracoes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') {
    chrome.storage.sync.get(DEFAULTS, applySettings);
  }
});
