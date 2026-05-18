# 🚀 Como Publicar no GitHub Pages

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no computador

## 🔐 PASSO 1: Mudar a Senha (OBRIGATÓRIO!)

**⚠️ FAÇA ISSO ANTES DE PUBLICAR!**

1. Abra o arquivo `auth.js`
2. Na linha 3, mude a senha:
   ```javascript
   const AUTH_PASSWORD = 'SuaSenhaForteAqui123!';
   ```
3. Salve o arquivo

## 📤 PASSO 2: Criar Repositório no GitHub

### Opção A: Repositório Privado (Recomendado)

1. Acesse https://github.com/new
2. Nome do repositório: `oratorio-cadastro`
3. **Marque como "Private"** 🔒
4. **NÃO** inicialize com README
5. Clique em "Create repository"

### Opção B: Repositório Público

Se escolher público, qualquer pessoa pode ver o código (incluindo a senha).
**Não recomendado para dados sensíveis!**

## 💻 PASSO 3: Enviar os Arquivos

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Sistema de cadastro do oratório"

# Conectar ao GitHub (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/oratorio-cadastro.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

## 🌐 PASSO 4: Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **"Settings"** (Configurações)
3. No menu lateral, clique em **"Pages"**
4. Em **"Source"**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
5. Clique em **"Save"**
6. Aguarde 2-3 minutos

## 🔗 PASSO 5: Acessar o Site

Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/oratorio-cadastro/
```

## 🔒 PASSO 6: Testar a Segurança

1. Abra o link em modo anônimo
2. Deve aparecer a tela de login
3. Digite a senha que você configurou
4. Deve entrar no sistema

## 📱 PASSO 7: Compartilhar

### Compartilhe com Segurança:

✅ **Link do Site:**
```
https://SEU-USUARIO.github.io/oratorio-cadastro/
```

✅ **Senha:**
Envie por WhatsApp, SMS ou pessoalmente
**Nunca poste a senha publicamente!**

### Exemplo de Mensagem:

```
Olá! Segue o link do sistema de cadastro do Oratório:

🔗 Link: https://SEU-USUARIO.github.io/oratorio-cadastro/

🔐 Senha: [sua senha aqui]

Por favor, não compartilhe o link e a senha com outras pessoas.
```

## 🔄 Como Atualizar o Site

Sempre que fizer alterações:

```bash
# Adicionar alterações
git add .

# Fazer commit
git commit -m "Descrição da alteração"

# Enviar para o GitHub
git push
```

Aguarde 1-2 minutos para o GitHub Pages atualizar.

## 🔐 Segurança - Checklist Final

Antes de compartilhar, verifique:

- [ ] ✅ Mudei a senha padrão no `auth.js`
- [ ] ✅ A senha é forte (mínimo 12 caracteres)
- [ ] ✅ Testei o login em modo anônimo
- [ ] ✅ O repositório está privado (se possível)
- [ ] ✅ A planilha Google Sheets está pública apenas para leitura
- [ ] ✅ Vou compartilhar a senha por canal seguro
- [ ] ✅ Li o arquivo SEGURANCA.md

## ⚠️ Problemas Comuns

### Site não carrega
- Aguarde 5-10 minutos após ativar o GitHub Pages
- Verifique se o repositório está público ou se você tem acesso
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Senha não funciona
- Verifique se mudou a senha no arquivo `auth.js`
- Certifique-se de que fez commit e push das alterações
- Aguarde alguns minutos para o GitHub Pages atualizar

### Dados não aparecem
- Verifique se a planilha Google Sheets está pública
- Abra o console do navegador (F12) para ver erros
- Confirme que o ID da planilha está correto no `script.js`

## 🔄 Atualizar Dados

Os dados são carregados automaticamente da planilha Google Sheets.

Para ver novos dados:
1. Adicione/edite na planilha
2. Salve
3. Recarregue o site (F5)

**Não precisa fazer nada no GitHub!**

## 🔒 Mudar a Senha Depois de Publicado

```bash
# 1. Edite auth.js e mude a senha
# 2. Salve e faça commit
git add auth.js
git commit -m "Atualizar senha"
git push

# 3. Aguarde 1-2 minutos
# 4. Informe a nova senha aos usuários
```

## 📊 Monitoramento

### Ver quem tem acesso ao repositório:
1. Vá para o repositório no GitHub
2. Clique em "Settings" > "Collaborators"
3. Veja a lista de pessoas com acesso

### Remover acesso:
1. Vá para "Settings" > "Collaborators"
2. Clique no X ao lado do nome da pessoa

## 🆘 Suporte

Se tiver problemas:

1. **Erro 404**: Verifique se o GitHub Pages está ativado
2. **Senha não funciona**: Verifique o arquivo `auth.js`
3. **Dados não carregam**: Verifique a planilha Google Sheets
4. **Site lento**: Normal, GitHub Pages pode demorar alguns segundos

## 📝 Comandos Git Úteis

```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log --oneline

# Desfazer última alteração (antes do commit)
git checkout -- arquivo.js

# Ver diferenças
git diff
```

## 🎯 Resumo Rápido

```bash
# 1. Mude a senha no auth.js
# 2. Inicialize o Git
git init
git add .
git commit -m "Sistema de cadastro"

# 3. Conecte ao GitHub
git remote add origin https://github.com/SEU-USUARIO/oratorio-cadastro.git
git push -u origin main

# 4. Ative GitHub Pages nas configurações
# 5. Aguarde 2-3 minutos
# 6. Acesse: https://SEU-USUARIO.github.io/oratorio-cadastro/
```

---

**Pronto! Seu sistema está no ar! 🎉**

Lembre-se de compartilhar o link e a senha apenas com pessoas autorizadas.