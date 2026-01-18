# WhatsApp Blur

Extensao para Chrome que aplica blur nas conversas do WhatsApp Web para maior privacidade.

## Funcionalidades

- **Blur na lista de conversas** - Oculta foto, nome e ultima mensagem dos contatos
- **Blur nas mensagens do chat** - Oculta o conteudo das mensagens (revelado ao passar o mouse)
- **Configuracoes personalizaveis** - Escolha o que ocultar ou exibir

### Opcoes de configuracao

Para cada elemento da lista de conversas (foto, nome, ultima mensagem), voce pode escolher:

| Opcao | Comportamento |
|-------|---------------|
| Ocultar sempre | Blur permanente |
| Ocultar parcialmente | Blur que desaparece ao passar o mouse |
| Exibir sempre | Sem blur |

## Instalacao

1. Baixe ou clone este repositorio
2. Abra `chrome://extensions/` no Chrome
3. Ative o **Modo do desenvolvedor** (canto superior direito)
4. Clique em **Carregar sem compactacao**
5. Selecione a pasta do projeto

## Como usar

1. Acesse [WhatsApp Web](https://web.whatsapp.com)
2. Clique no icone da extensao na barra do navegador
3. Configure as opcoes de privacidade conforme sua preferencia
4. As alteracoes sao aplicadas automaticamente

## Estrutura do projeto

```
WhatsAppBlur/
├── manifest.json   # Configuracao da extensao
├── style.css       # Estilos de blur
├── content.js      # Aplica configuracoes na pagina
├── popup.html      # Interface de configuracoes
├── popup.js        # Logica do popup
└── README.md
```

## Compatibilidade

- Google Chrome (Manifest V3)
- Microsoft Edge (baseado em Chromium)
- Outros navegadores baseados em Chromium

## Licenca

MIT
