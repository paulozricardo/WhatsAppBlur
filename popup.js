const DEFAULTS = {
  icon: 'partial',
  name: 'partial',
  message: 'partial'
};

const iconSelect = document.getElementById('icon');
const nameSelect = document.getElementById('name');
const messageSelect = document.getElementById('message');
const statusEl = document.getElementById('status');

// Carregar configuracoes salvas
chrome.storage.sync.get(DEFAULTS, (settings) => {
  iconSelect.value = settings.icon;
  nameSelect.value = settings.name;
  messageSelect.value = settings.message;
});

// Salvar ao mudar
function saveSettings() {
  const settings = {
    icon: iconSelect.value,
    name: nameSelect.value,
    message: messageSelect.value
  };

  chrome.storage.sync.set(settings, () => {
    statusEl.classList.add('show');
    setTimeout(() => {
      statusEl.classList.remove('show');
    }, 1500);
  });
}

iconSelect.addEventListener('change', saveSettings);
nameSelect.addEventListener('change', saveSettings);
messageSelect.addEventListener('change', saveSettings);
