const DEFAULTS = {
  icon: 'never',
  name: 'never',
  message: 'partial',
  chatMessages: 'partial',
  blurIntensity: 5
};

const iconSelect = document.getElementById('icon');
const nameSelect = document.getElementById('name');
const messageSelect = document.getElementById('message');
const chatMessagesSelect = document.getElementById('chatMessages');
const blurIntensityInput = document.getElementById('blurIntensity');
const blurValueEl = document.getElementById('blurValue');
const statusEl = document.getElementById('status');

// Carregar configuracoes salvas
chrome.storage.sync.get(DEFAULTS, (settings) => {
  iconSelect.value = settings.icon;
  nameSelect.value = settings.name;
  messageSelect.value = settings.message;
  chatMessagesSelect.value = settings.chatMessages;
  blurIntensityInput.value = settings.blurIntensity;
  blurValueEl.textContent = settings.blurIntensity + 'px';
});

// Salvar ao mudar
function saveSettings() {
  const settings = {
    icon: iconSelect.value,
    name: nameSelect.value,
    message: messageSelect.value,
    chatMessages: chatMessagesSelect.value,
    blurIntensity: parseInt(blurIntensityInput.value)
  };

  chrome.storage.sync.set(settings, () => {
    statusEl.classList.add('show');
    setTimeout(() => {
      statusEl.classList.remove('show');
    }, 1500);
  });
}

// Atualizar valor exibido do slider
blurIntensityInput.addEventListener('input', () => {
  blurValueEl.textContent = blurIntensityInput.value + 'px';
});

iconSelect.addEventListener('change', saveSettings);
nameSelect.addEventListener('change', saveSettings);
messageSelect.addEventListener('change', saveSettings);
chatMessagesSelect.addEventListener('change', saveSettings);
blurIntensityInput.addEventListener('change', saveSettings);
