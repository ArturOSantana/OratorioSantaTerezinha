# 🔄 Atualização Automática com Google Sheets

## ✅ Configuração Concluída!

O sistema está configurado para carregar os dados **automaticamente** da sua planilha do Google Sheets.

### 📋 Planilha Conectada:
- **ID**: `1Muvxv9Vn2-n2daLxNS6lnMcn29lL2DmXZ5Siy21mwro`
- **Link**: https://docs.google.com/spreadsheets/d/1Muvxv9Vn2-n2daLxNS6lnMcn29lL2DmXZ5Siy21mwro/edit

## 🔄 Como Funciona:

1. **Você adiciona/edita dados na planilha**
2. **Salva as alterações no Google Sheets**
3. **Recarrega a página do sistema** (F5 ou Ctrl+R)
4. **Os dados são atualizados automaticamente!**

## ⚙️ Configuração Atual:

No arquivo `script.js`, linha 2:
```javascript
const USE_LOCAL_DATA = false; // Usando Google Sheets
```

### Para Alternar Entre Modos:

**Modo Google Sheets (Automático):**
```javascript
const USE_LOCAL_DATA = false;
```

**Modo Local (Arquivo data.js):**
```javascript
const USE_LOCAL_DATA = true;
```

## 📝 Estrutura da Planilha:

A planilha deve manter estas colunas (na ordem atual):

1. Carimbo de data/hora
2. Nome completo da Criança
3. Idade
4. Endereço
5. A criança possui alguma condição de saúde?
6. Se sim, qual?
7. A criança possui alergias?
8. Qual?
9. Faz uso de algum medicamento?
10. Se sim qual?
11. Alguma observação importante sobre a criança:
12. Nome da mãe
13. Telefone da mãe
14. Nome do pai
15. Telefone do pai
16. Telefone para emergência

## 🚀 Publicar no GitHub Pages:

### Passo 1: Criar Repositório

```bash
cd "/Users/artur.santana/estudos/Oratorio/monitoramento e dados"
git init
git add .
git commit -m "Sistema de Cadastro do Oratório"
```

### Passo 2: Conectar ao GitHub

1. Crie um repositório no GitHub: https://github.com/new
2. Nome sugerido: `oratorio-cadastro`
3. Deixe como **Public**
4. **NÃO** inicialize com README

```bash
git remote add origin https://github.com/SEU-USUARIO/oratorio-cadastro.git
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **main** branch
5. Clique em **Save**
6. Aguarde 2-3 minutos

### Passo 4: Acessar o Site

Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/oratorio-cadastro/
```

## 🔒 Segurança da Planilha:

### ✅ Configuração Atual (Recomendada):
- Planilha pública para **leitura**
- Apenas você pode **editar**
- Dados são carregados via CSV público

### 🔐 Para Manter Seguro:

1. **Não compartilhe o link de edição** da planilha
2. **Compartilhe apenas o link do site** publicado
3. A planilha precisa estar **pública para leitura** para funcionar

## 🔄 Atualizar Dados:

### Método 1: Editar Diretamente na Planilha
1. Abra a planilha no Google Sheets
2. Adicione/edite as informações
3. Salve (Ctrl+S ou automático)
4. Recarregue o site (F5)

### Método 2: Usar Formulário Google
- O formulário já está conectado à planilha
- Novas respostas aparecem automaticamente
- Basta recarregar o site para ver as atualizações

## 📱 Testar Atualização:

1. Adicione uma nova criança na planilha
2. Salve as alterações
3. Abra o site e pressione F5
4. A nova criança deve aparecer na lista!

## ⚠️ Solução de Problemas:

### Dados não atualizam:
1. Verifique se a planilha está pública
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Tente em modo anônimo
4. Verifique o console do navegador (F12)

### Erro de CORS:
- Isso pode acontecer ao testar localmente
- Funciona perfeitamente no GitHub Pages
- Para testar local, use `USE_LOCAL_DATA = true`

### Planilha não carrega:
1. Confirme que o ID está correto no `script.js`
2. Verifique se a planilha está pública
3. Teste o link CSV no navegador:
```
https://docs.google.com/spreadsheets/d/1Muvxv9Vn2-n2daLxNS6lnMcn29lL2DmXZ5Siy21mwro/gviz/tq?tqx=out:csv
```

## 💡 Dicas:

- **Backup**: O arquivo `data.js` serve como backup dos dados
- **Offline**: Mude para `USE_LOCAL_DATA = true` para funcionar offline
- **Performance**: Os dados são carregados a cada vez que a página é aberta
- **Cache**: O navegador pode cachear por alguns minutos

## 🎯 Próximos Passos:

1. ✅ Sistema funcionando com Google Sheets
2. ✅ Dados atualizando automaticamente
3. 📤 Publicar no GitHub Pages
4. 📱 Compartilhar o link com a equipe
5. 🔄 Adicionar novas crianças conforme necessário

---

**Tudo pronto! O sistema está configurado para atualização automática! 🎉**