# UENP SMP – Landing Page

Landing page do servidor universitário de Minecraft UENP SMP, servida por Node.js + Express com arquivos estáticos.

## 🚀 Visão Geral

- **Nome do pacote**: `uenp-smp-site`
- **Descrição**: Landing page do servidor UENP SMP (Minecraft)
- **Stack**: Node.js (ESM), Express, HTML/CSS/JS estáticos
- **Ponto de entrada**: `server.js`
- **Pasta pública**: `public/`
- **Licença**: MIT

## 📂 Estrutura

```
UENPSMPserver/
├─ package.json
├─ package-lock.json
├─ server.js
├─ public/
│  ├─ index.html
│  └─ assets/
│     ├─ styles.css
│     └─ main.js
└─ views/               # (atual: vazio)
```

## 🖥️ Servidor (Express)

- Arquivo: `server.js` (ESM)
- Estático: `public/`
- Headers de segurança: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`
- Rotas:
  - `GET /` → `public/index.html`
  - `GET /health` → `{ ok: true }`
- Porta: `process.env.PORT || 3000`

## 🎨 Frontend

- `public/index.html`: seções Hero, Features, Como Jogar, Entrar, Sobre e Footer
- `public/assets/styles.css`: tema escuro, tipografia Poppins, grid responsivo
- `public/assets/main.js`:
  - Atualiza o ano do footer automaticamente
  - Smooth scroll para âncoras internas
  - `copyToClipboard(text)` com feedback visual e fallback

## ✅ Requisitos

- Node.js 18+ recomendado
- NPM para scripts

## 🛠️ Instalação e Uso

1. Instale dependências:
   ```powershell
   npm install
   ```
2. Dev com reload:
   ```powershell
   npm run dev
   ```
3. Produção/local:
   ```powershell
   npm start
   ```
   Acesse: `http://localhost:3000`

## ⚙️ Configuração

- `PORT` (opcional)

Exemplo (PowerShell):

```powershell
$env:PORT=8080; npm start
```

## 📦 Deploy (resumo)

- Container: Node 18+, copiar `public/`, `server.js`, `package*.json`, `npm ci`, expor `PORT`, `node server.js`
- PaaS (Railway/Render/Heroku): `PORT` via ambiente, start `npm start`
- Reverse proxy (Nginx/Caddy) → `localhost:PORT`

## 📡 Healthcheck

- `GET /health` → `{ ok: true }`

## 📝 Observações

- `views/` existe mas não é utilizado atualmente
- Projeto em ESM: use `import`/`export`

## 👤 Autor

- **j0aod3v** – https://github.com/j0aod3v
