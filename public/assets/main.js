// Configurações centralizadas
const CONFIG = {
  DISCORD_URL: "https://discord.gg/wyYK9gQMDq",
  SERVER_IP: "play.uenpsmp.games",
};

// Atualiza ano no footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Popula links do Discord e IP do servidor
document.addEventListener("DOMContentLoaded", function () {
  // Atualiza todos os links do Discord
  document.querySelectorAll("[data-discord-link]").forEach((link) => {
    link.href = CONFIG.DISCORD_URL;
  });

  // Atualiza o IP do servidor
  const serverIpEl = document.getElementById("server-ip-display");
  if (serverIpEl) {
    serverIpEl.textContent = CONFIG.SERVER_IP;
  }

  // Atualiza o botão de cópia para usar o IP correto
  const copyBtn = document.getElementById("copy-ip-btn");
  if (copyBtn) {
    copyBtn.onclick = () => copyToClipboard(CONFIG.SERVER_IP);
  }
});

// Smooth scroll simples para âncoras
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      e.preventDefault();
      document
        .querySelector(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Função para copiar texto para área de transferência
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      // Feedback visual temporário
      const buttons = document.querySelectorAll(".copy-btn");
      buttons.forEach((btn) => {
        if (btn.onclick.toString().includes(text)) {
          const originalText = btn.textContent;
          btn.textContent = "✅";
          btn.style.color = "var(--primary)";
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.color = "var(--text)";
          }, 1500);
        }
      });
    })
    .catch(function (err) {
      // Fallback para navegadores mais antigos
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      // Feedback visual
      const buttons = document.querySelectorAll(".copy-btn");
      buttons.forEach((btn) => {
        if (btn.onclick.toString().includes(text)) {
          const originalText = btn.textContent;
          btn.textContent = "✅";
          btn.style.color = "var(--primary)";
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.color = "var(--text)";
          }, 1500);
        }
      });
    });
}
