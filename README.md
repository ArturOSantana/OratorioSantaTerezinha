# Oratório - Cadastro de Crianças

Sistema web para visualização de informações das crianças do oratório usando Google Sheets como banco de dados.

## Para que serve

Permite visualizar e gerenciar informações das crianças cadastradas, incluindo:
- Dados pessoais e contatos
- Alergias e condições de saúde
- Informações dos responsáveis
- Observações importantes

## Como usar Google Sheets como banco de dados

### 1. Preparar a Planilha

Crie uma planilha no Google Sheets com as seguintes colunas (na ordem):

| Coluna | Nome | Exemplo |
|--------|------|---------|
| A | Carimbo de data/hora | 01/01/2024 10:00:00 |
| B | Nome da criança | João Silva |
| C | Idade | 8 anos |
| D | Endereço | Rua das Flores, 123 |
| E | Tem condição de saúde? | Sim / Não |
| F | Qual condição? | Asma |
| G | Tem alergia? | Sim / Não |
| H | Qual alergia? | Lactose |
| I | Usa medicamento? | Sim / Não |
| J | Qual medicamento? | Bombinha |
| K | Observações | Texto livre |
| L | Nome da mãe | Maria Silva |
| M | Telefone da mãe | (11) 98765-4321 |
| N | Nome do pai | José Silva |
| O | Telefone do pai | (11) 91234-5678 |
| P | Telefone de emergência | (11) 99999-9999 |

### 2. Tornar a Planilha Pública

1. Abra sua planilha
2. Clique em "Compartilhar"
3. Em "Acesso geral", selecione "Qualquer pessoa com o link"
4. Permissão: "Leitor"
5. Clique em "Concluído"

### 3. Configurar o Sistema

1. Copie o ID da planilha da URL:
   ```
   https://docs.google.com/spreadsheets/d/[COPIE_ESTE_ID]/edit
   ```

2. Edite o arquivo `env.js`:
   ```javascript
   window.ENV_AUTH_PASSWORD = 'sua_senha';
   window.ENV_SHEET_ID = 'ID_DA_SUA_PLANILHA';
   ```

3. Faça commit e push para o GitHub

### 4. Ativar GitHub Pages

1. Vá em Settings > Pages
2. Source: "main" branch
3. Save
4. Acesse: `https://seu-usuario.github.io/nome-repositorio/`

## Estrutura de Arquivos

```
├── index.html       - Interface
├── script.js        - Lógica e conexão com Sheets
├── styles.css       - Estilos
├── auth.js          - Autenticação
├── env.js           - Configurações (senha e ID da planilha)
└── README.md        - Documentação
```

## Atualizar Dados

Para atualizar os dados, basta editar a planilha do Google Sheets. O sistema carrega os dados automaticamente a cada acesso.

## Segurança

A senha configurada em `env.js` ficará visível no código fonte (GitHub Pages é estático). Use apenas para controle de acesso básico.