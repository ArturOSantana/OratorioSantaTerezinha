# 🙏 Oratório - Cadastro de Crianças

Sistema web responsivo para gerenciamento e visualização de informações das crianças do oratório, otimizado para dispositivos móveis.

## 📱 Funcionalidades

- ✅ Visualização de lista de crianças
- 🔍 Busca por nome
- 🏷️ Filtros (Todas / Com Alergias)
- 📊 Estatísticas em tempo real
- 📱 Design responsivo mobile-first
- 🎨 Interface moderna e intuitiva
- ⚠️ Destaque para alergias
- 📞 Links diretos para telefone (click-to-call)
- 📋 Visualização detalhada de cada criança

## 🚀 Como Usar

### Configuração da Planilha Google Sheets

1. **Torne sua planilha pública:**
   - Abra sua planilha no Google Sheets
   - Clique em "Compartilhar" no canto superior direito
   - Em "Acesso geral", selecione "Qualquer pessoa com o link"
   - Certifique-se de que está como "Leitor"

2. **Estrutura da Planilha:**
   
   A planilha deve ter as seguintes colunas (os nomes podem variar):
   
   | Nome | Idade | Data de Nascimento | Telefone | Responsável | Endereço | Alergia | Observações |
   |------|-------|-------------------|----------|-------------|----------|---------|-------------|
   | João Silva | 8 anos | 15/03/2018 | (11) 98765-4321 | Maria Silva | Rua das Flores, 123 | Lactose | Atenção especial |

3. **Configurar o ID da Planilha:**
   
   No arquivo `script.js`, atualize a linha 2 com o ID da sua planilha:
   ```javascript
   const SHEET_ID = 'SEU_ID_AQUI';
   ```
   
   O ID está na URL da planilha:
   ```
   https://docs.google.com/spreadsheets/d/[ID_DA_PLANILHA]/edit
   ```

### Hospedagem no GitHub Pages

1. **Criar Repositório:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Enviar para GitHub:**
   ```bash
   git remote add origin https://github.com/seu-usuario/oratorio-cadastro.git
   git branch -M main
   git push -u origin main
   ```

3. **Ativar GitHub Pages:**
   - Vá para Settings > Pages
   - Em "Source", selecione "main" branch
   - Clique em "Save"
   - Seu site estará disponível em: `https://seu-usuario.github.io/oratorio-cadastro/`

## 📂 Estrutura do Projeto

```
oratorio-cadastro/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── script.js           # Lógica e integração com Google Sheets
└── README.md           # Documentação
```

## 🎨 Personalização

### Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Cor principal */
    --secondary-color: #8b5cf6;    /* Cor secundária */
    --success-color: #10b981;      /* Cor de sucesso */
    --warning-color: #f59e0b;      /* Cor de aviso */
    --danger-color: #ef4444;       /* Cor de perigo */
}
```

### Título e Ícone

Edite o arquivo `index.html`:

```html
<h1 class="header-title">🙏 Oratório</h1>
<p class="header-subtitle">Cadastro de Crianças</p>
```

## 🔧 Solução de Problemas

### Dados não carregam

1. Verifique se a planilha está pública
2. Confirme se o ID da planilha está correto no `script.js`
3. Verifique o console do navegador (F12) para erros
4. Se necessário, o sistema usará dados de exemplo automaticamente

### Layout quebrado no mobile

1. Limpe o cache do navegador
2. Verifique se todos os arquivos (HTML, CSS, JS) estão no mesmo diretório
3. Teste em modo anônimo/privado do navegador

## 📱 Compatibilidade

- ✅ Chrome (Android/iOS)
- ✅ Safari (iOS)
- ✅ Firefox (Android)
- ✅ Edge
- ✅ Samsung Internet

## 🔮 Funcionalidades Futuras

- [ ] Upload e exibição de fotos das crianças
- [ ] Exportação de dados em PDF
- [ ] Modo escuro
- [ ] Notificações de aniversários
- [ ] Histórico de presença
- [ ] Sistema de check-in/check-out

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Enviar pull requests

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório do GitHub.

---

Desenvolvido com ❤️ para o Oratório