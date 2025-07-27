# ⏱️ Temporizador Interativo com Alerta Visual e Sonoro

Um projeto de cronômetro regressivo desenvolvido com HTML, CSS e JavaScript. O temporizador possui efeitos visuais e som nos últimos 10 segundos para chamar a atenção do usuário, além de funcionalidades como pausa, edição e reset.

![Temporizador Interativo](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Tecnologias](https://img.shields.io/badge/HTML5-CSS3-JavaScript-orange)
![Licença](https://img.shields.io/badge/Licença-MIT-blue)

## 📸 Demonstração

**🌐 [Acesse o projeto online](https://richardmoraessouza.github.io/timer-interativo/)**

## ✨ Funcionalidades

### 🎮 Controles Principais
- **⏸️ Pausar/Retomar** - Controle total da contagem regressiva
- **🔄 Reset** - Reinicia o temporizador com um clique
- **✏️ Editar Tempo** - Formulário para personalizar a duração

- ✅ Temporizador regressivo configurável
- ⏸️ Pausar e retomar a contagem
- 🔁 Reset com um clique
- 🎨 Alerta visual dinâmico nos últimos 10 segundos (mudança de cor)
- 🔊 Alerta sonoro nos últimos segundos
- 📝 Formulário para editar o tempo restante

### 🔊 Alertas Sonoros
- **🔊 Som de Alerta** - Notificação sonora nos últimos segundos
- **🎵 Sincronizado** - Áudio sincronizado com os efeitos visuais

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **HTML5** | - | Estrutura semântica e acessível |
| **CSS3** | - | Estilização moderna e responsiva |
| **JavaScript** | ES6+ | Lógica do cronômetro e manipulação do DOM |
| **Font Awesome** | 6.5.0 | Ícones profissionais |
| **Google Fonts** | - | Tipografia Orbitron para display |

## 🚀 Como Usar

### 📋 Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar fontes e ícones)

### ⚡ Instalação Rápida

1. **Clone o repositório**
   ```bash
   git clone https://github.com/richardmoraessouza/timer-interativo.git
   cd timer-interativo
   ```

2. **Abra o projeto**
   ```bash
   # Abra o arquivo index.html no seu navegador
   # Ou use um servidor local:
   python -m http.server 8000
   # Acesse: http://localhost:8000
   ```

### 🎮 Instruções de Uso

1. **Iniciar**: O temporizador inicia automaticamente com 30 segundos
2. **Pausar**: Clique no botão ⏸️ para pausar/retomar
3. **Reset**: Clique no botão 🔄 para reiniciar
4. **Editar**: Clique no botão ✏️ para alterar o tempo
5. **Aguardar**: Nos últimos 10 segundos, observe os efeitos visuais e sonoros

## 📁 Estrutura do Projeto

```
timer-interativo/
├── 📄 index.html          # Página principal
├── 🎨 segundos.css        # Estilos e animações
├── ⚙️ segundos.js         # Lógica do temporizador
├── 🔊 som/
│   └── new-notification-08-352461.mp3  # Áudio de alerta
└── 📖 README.md           # Documentação
```

## 🔧 Personalização

### Alterando o Tempo Padrão
```javascript
// Em segundos.js, linha 15
let index = 30; // Altere para o tempo desejado
```

### Modificando Cores
```css
/* Em segundos.css */
:root {
  --cor-primaria: #3EF9F3;
  --cor-secundaria: #0f0f0f;
}
```

### Adicionando Novos Sons
1. Adicione o arquivo de áudio na pasta `som/`
2. Atualize o caminho no `index.html`:
   ```html
   <audio src="som/seu-arquivo.mp3" id="som"></audio>
   ```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### 📝 Sugestões de Melhorias
- [ ] Adicionar mais opções de sons
- [ ] Implementar temas visuais
- [ ] Adicionar notificações push
- [ ] Criar modo noturno
- [ ] Adicionar histórico de tempos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Richard Moraes Souza**
- GitHub: [@richardmoraessouza](https://github.com/richardmoraessouza)
- Projeto: [Timer Interativo](https://richardmoraessouza.github.io/timer-interativo/)

## 🙏 Agradecimentos

- [Font Awesome](https://fontawesome.com/) pelos ícones
- [Google Fonts](https://fonts.google.com/) pela tipografia
- [Freesound](https://freesound.org/) pelo áudio de notificação

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
