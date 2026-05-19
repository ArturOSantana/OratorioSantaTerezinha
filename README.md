# Oratório - Cadastro de Crianças

Sistema web responsivo para gerenciamento e visualização de informações das crianças do oratório, otimizado para dispositivos móveis.

## Funcionalidades

- Visualização de lista de crianças
- Busca por nome
- Filtros (Todas / Com Alergias)
- Estatísticas em tempo real
- Design responsivo mobile-first
- Interface moderna e intuitiva
- Destaque para alergias
- Links diretos para telefone (click-to-call)
- Visualização detalhada de cada criança

## Como Usar

### Configuração de Segurança

1. **Configure a senha de acesso:**
   - Edite o arquivo `env.js` e altere a senha:
   ```javascript
   window.ENV_AUTH_PASSWORD = 'sua_senha_segura';
   ```
   - Faça commit e push do arquivo `env.js` para o GitHub
   - A senha ficará visível no repositório, então use uma senha específica para este sistema

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

## Estrutura do Projeto

```
oratorio-cadastro/
├── index.html
├── styles.css
├── script.js
├── auth.js
├── env.js              (configure sua senha aqui)
├── env.example.js      (exemplo de configuração)
└── README.md
```

## Segurança

IMPORTANTE: Como o GitHub Pages é um serviço de hospedagem estática, a senha ficará visível no código fonte. Este sistema de autenticação é adequado para:
- Controle de acesso básico
- Dados não sensíveis
- Uso interno/comunitário

Para dados sensíveis, considere usar um backend com autenticação real.

## Personalização

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

## Solução de Problemas

### Dados não carregam

1. Verifique se a planilha está pública
2. Confirme se o ID da planilha está correto no `script.js`
3. Verifique o console do navegador (F12) para erros
4. Se necessário, o sistema usará dados de exemplo automaticamente

### Layout quebrado no mobile

1. Limpe o cache do navegador
2. Verifique se todos os arquivos (HTML, CSS, JS) estão no mesmo diretório
3. Teste em modo anônimo/privado do navegador

## Compatibilidade

- Chrome (Android/iOS)
- Safari (iOS)
- Firefox (Android)
- Edge
- Samsung Internet

## Licença

Este projeto é de código aberto e está disponível para uso livre.