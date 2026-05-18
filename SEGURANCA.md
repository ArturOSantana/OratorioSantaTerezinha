# 🔒 Instruções de Segurança

## ⚠️ IMPORTANTE - LEIA ANTES DE PUBLICAR!

### 🔐 Proteção com Senha

O sistema está protegido com uma tela de login. **VOCÊ DEVE MUDAR A SENHA ANTES DE PUBLICAR!**

### 📝 Como Mudar a Senha:

1. Abra o arquivo `auth.js`
2. Na linha 3, encontre:
   ```javascript
   const AUTH_PASSWORD = 'oratorio2026'; // MUDE ESTA SENHA!
   ```
3. Substitua `'oratorio2026'` pela sua senha:
   ```javascript
   const AUTH_PASSWORD = 'SuaSenhaAqui123';
   ```
4. Salve o arquivo
5. Faça commit e push para o GitHub

### 🔒 Nível de Segurança:

**⚠️ ATENÇÃO:** Esta é uma proteção **BÁSICA** adequada para:
- ✅ Impedir acesso casual
- ✅ Proteger de buscadores (Google, etc)
- ✅ Evitar compartilhamento acidental do link

**❌ NÃO É ADEQUADA PARA:**
- ❌ Dados extremamente sensíveis
- ❌ Proteção contra hackers profissionais
- ❌ Dados que exigem criptografia forte

### 🛡️ Como Funciona:

1. **Tela de Login**: Usuário precisa digitar senha
2. **Sessão**: Senha válida por sessão do navegador
3. **Sem Backend**: Tudo funciona no navegador (client-side)

### ⚠️ Limitações de Segurança:

1. **Senha no Código**: A senha está visível no arquivo `auth.js`
   - Qualquer pessoa que veja o código-fonte pode ver a senha
   - Isso é normal para sites estáticos (GitHub Pages)

2. **Sem Criptografia**: Os dados não são criptografados
   - Qualquer pessoa com acesso ao código pode ver os dados

3. **Planilha Pública**: A planilha Google Sheets precisa ser pública
   - Qualquer pessoa com o link da planilha pode ver os dados

### ✅ Recomendações de Segurança:

#### 1. **Senha Forte**
```javascript
// ❌ Ruim
const AUTH_PASSWORD = '123456';

// ✅ Bom
const AUTH_PASSWORD = 'Oratorio@2026!Seguro';
```

#### 2. **Compartilhe com Cuidado**
- ✅ Compartilhe o link apenas com pessoas autorizadas
- ✅ Compartilhe a senha por canal seguro (WhatsApp, pessoalmente)
- ❌ Não poste o link em redes sociais públicas
- ❌ Não envie a senha por e-mail não criptografado

#### 3. **Mude a Senha Regularmente**
- Mude a senha a cada 3-6 meses
- Mude se suspeitar que foi compartilhada indevidamente

#### 4. **Monitore o Acesso**
- Verifique quem tem acesso ao repositório GitHub
- Mantenha o repositório como **Private** se possível

### 🔄 Como Mudar a Senha Depois de Publicado:

```bash
# 1. Edite o arquivo auth.js
# 2. Mude a senha
# 3. Salve e faça commit
git add auth.js
git commit -m "Atualizar senha"
git push

# 4. Aguarde 1-2 minutos para o GitHub Pages atualizar
# 5. Informe a nova senha aos usuários autorizados
```

### 🚨 Se a Senha Vazar:

1. **Mude imediatamente** seguindo os passos acima
2. **Informe os usuários autorizados** da nova senha
3. **Considere** tornar o repositório privado temporariamente

### 📊 Proteção dos Dados da Planilha:

#### Configuração Atual:
- ✅ Planilha pública para **leitura**
- ✅ Apenas você pode **editar**
- ✅ Dados carregados via CSV público

#### Para Maior Segurança:
Se precisar de mais segurança, considere:
1. **Usar Google Sheets API** com autenticação
2. **Criar um backend** (Node.js, Python, etc)
3. **Usar serviço de hospedagem** com autenticação real (Vercel, Netlify)

### 📱 Segurança Mobile:

- ✅ Senha funciona em todos os dispositivos
- ✅ Sessão expira ao fechar o navegador
- ⚠️ Não salve a senha no navegador em dispositivos compartilhados

### 🎯 Resumo - Checklist de Segurança:

Antes de publicar, verifique:

- [ ] Mudei a senha padrão no `auth.js`
- [ ] A senha é forte (letras, números, símbolos)
- [ ] Testei o login com a nova senha
- [ ] Vou compartilhar o link apenas com pessoas autorizadas
- [ ] Vou enviar a senha por canal seguro
- [ ] Entendo as limitações de segurança
- [ ] Configurei a planilha como pública para leitura apenas

### 📞 Suporte:

Se tiver dúvidas sobre segurança:
1. Revise este documento
2. Teste em modo anônimo do navegador
3. Considere contratar um desenvolvedor para implementar segurança mais robusta

---

**Lembre-se:** Esta é uma solução de proteção básica adequada para uso interno de uma comunidade. Para dados mais sensíveis, considere soluções profissionais com backend e autenticação real.