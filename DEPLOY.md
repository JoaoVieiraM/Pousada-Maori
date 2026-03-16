# 🚀 Guia Rápido de Deploy - Pousada Maori

## Opção 1: Vercel (Mais Rápido - RECOMENDADO)

### Via Interface Web (Mais Fácil)
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" (pode usar conta GitHub)
3. Clique em "Add New Project"
4. Importe seu repositório GitHub ou faça upload da pasta `guest-guide`
5. Configurações automáticas já estarão corretas
6. Clique em "Deploy"
7. **Pronto!** Seu site estará online em segundos

### Via CLI
```bash
# Instalar Vercel CLI
npm install -g vercel

# Dentro da pasta guest-guide
cd guest-guide

# Fazer login
vercel login

# Deploy
vercel

# Para deploy em produção
vercel --prod
```

**Resultado:** Você receberá uma URL como `https://seu-projeto.vercel.app`

---

## Opção 2: Netlify

### Via Drag & Drop (Super Simples)
1. Acesse [netlify.com](https://netlify.com)
2. Crie uma conta gratuita
3. No seu terminal, faça o build:
   ```bash
   cd guest-guide
   npm run build
   ```
4. Arraste a pasta `dist` para o Netlify Drop Zone
5. **Pronto!** Site online

### Via CLI
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

---

## Opção 3: GitHub Pages

1. **Instalar gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Adicionar ao `package.json`:**
   ```json
   {
     "homepage": "https://seu-usuario.github.io/maori-guest-guide",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## 📱 Após o Deploy: Criar QR Code

1. Copie a URL do seu site (ex: `https://maori-guide.vercel.app`)

2. Acesse um gerador de QR Code:
   - [QR Code Generator](https://www.qr-code-generator.com/)
   - [QR Code Monkey](https://www.qrcode-monkey.com/)

3. Cole a URL e personalize:
   - Adicione logo da Pousada Maori
   - Escolha cores (use o turquesa #1BB8CE)
   - Adicione texto "Guia do Hóspede"

4. Baixe em alta resolução (PNG ou SVG)

5. Imprima e coloque em:
   - **Quartos** (em cada porta ou mesa de cabeceira)
   - **Recepção** (balcão e parede)
   - **Áreas comuns** (piscina, café da manhã)

---

## 🔗 Link Curto (Opcional)

Crie um link mais fácil de lembrar:

1. Acesse [bitly.com](https://bitly.com)
2. Cole sua URL
3. Personalize: `bit.ly/maori-guia`
4. Use este link curto no QR Code

---

## ✅ Checklist Pós-Deploy

- [ ] Site está online e acessível
- [ ] Testado em celular (Chrome/Safari)
- [ ] Testado em tablet
- [ ] Testado em desktop
- [ ] QR Code gerado
- [ ] QR Code impresso em boa qualidade
- [ ] Materiais distribuídos nos quartos
- [ ] Equipe informada sobre o guia digital

---

## 🆘 Problemas Comuns

### Site não carrega imagens
**Solução:** Verifique se os caminhos das imagens estão corretos no código

### Build falha
**Solução:**
```bash
rm -rf node_modules
npm install
npm run build
```

### Erro de TypeScript
**Solução:** Execute `npm run build` localmente primeiro para ver os erros

---

## 📊 Analytics (Opcional)

Adicionar Google Analytics para ver quantos hóspedes acessam:

1. Criar conta no Google Analytics
2. Adicionar código de tracking no `index.html`
3. Ver estatísticas de uso

---

## 🔄 Como Atualizar o Conteúdo

1. Edite o arquivo `src/App.tsx`
2. Teste localmente: `npm run dev`
3. Faça novo deploy (Vercel/Netlify fazem automaticamente se conectado ao Git)

---

**Tempo estimado de deploy:** 5-10 minutos
**Custo:** R$ 0,00 (todas as opções são gratuitas)
**Dificuldade:** ⭐⭐☆☆☆ (Fácil)

## 🎉 Pronto!

Seu guia digital estará disponível 24/7 para todos os hóspedes!

**Dúvidas?** Consulte o README.md principal na pasta guest-guide.
