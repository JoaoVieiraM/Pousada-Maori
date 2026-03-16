# 🏝️ Guia Digital de Hóspedes - Pousada Maori

Um guia digital moderno e interativo para os hóspedes da Pousada Maori, criado com React, TypeScript, Tailwind CSS e Framer Motion.

![Pousada Maori](guest-guide/public/logo-maori.png)

## 🎨 Visão Geral

Este projeto é um guia completo para hóspedes da Pousada Maori em São Sebastião - SP, oferecendo todas as informações essenciais de forma moderna, intuitiva e responsiva.

## ✨ Funcionalidades

### 📋 Informações Essenciais
- **Check-in/Check-out** - Horários e políticas
- **Wi-Fi** - Rede e senha em destaque
- **Café da Manhã** - Horários e informações sobre reservas Booking.com
- **Comodidades do Quarto** - SmartTV, frigobar, ar condicionado, etc.
- **Tomadas** - Informação sobre voltagem (220V)
- **Piscina** - Horário de funcionamento
- **Política de Pets** - Informações claras
- **Link para Reservas** - Acesso direto ao Booking.com

### 🏖️ Praias Próximas (Expansíveis)
Informações detalhadas de 5 praias da região:

1. **Boicucanga Beach** (450m - 6 min a pé)
   - Infraestrutura comercial completa
   - Pôr do sol espetacular
   - Passeios de barco

2. **Brava Beach** (850m - 11 min a pé)
   - Praia selvagem e deserta
   - Ondas fortes para surf
   - Natureza intocada

3. **Praia de Camburizinho** (2,7km - 8 min de carro)
   - Tranquila e familiar
   - Águas calmas para crianças
   - Rio encontra o mar

4. **Praia de Camburi** (3,4km - 10 min de carro)
   - Badalada e sofisticada
   - Gastronomia de alto nível
   - Vida noturna

5. **Maresias Beach** (6km - 15 min de carro)
   - Mais famosa do litoral norte
   - Ondas mundialmente conhecidas
   - Baladas e surf profissional

**Clique em cada praia** para ver informações detalhadas sobre perfil, mar, destaques e infraestrutura!

### 🖼️ Galeria de Fotos
Galeria interativa com fotos da pousada:
- Área comum
- Quartos
- Arte nas paredes
- Fachada externa

## 🎨 Design

### Paleta de Cores (Identidade Visual Pousada Maori)
- **Turquesa** (#1BB8CE) - Cor principal
- **Coral** (#FF6B6B) - Acento vibrante
- **Laranja** (#FF9800) - Acento secundário
- **Amarelo** (#FFD54F) - Destaque
- **Bege** (#F5F1E8) - Fundo suave
- **Dark** (#2C3E50) - Textos e rodapé

### Características
- Design responsivo (mobile-first)
- Animações suaves com Framer Motion
- Ícones intuitivos para cada seção
- Interface moderna e clean
- Cards interativos e expansíveis

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas
- **React Icons** - Biblioteca de ícones

## 📂 Estrutura do Projeto

```
maori/
├── guest-guide/                  # Aplicação React
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.tsx         # Cabeçalho com logo
│   │   │   ├── InfoCard.tsx     # Cards de informação
│   │   │   ├── BeachCard.tsx    # Cards expansíveis de praias
│   │   │   ├── ImageGallery.tsx # Galeria de fotos
│   │   │   └── Footer.tsx       # Rodapé
│   │   ├── App.tsx              # Componente principal
│   │   ├── App.css              # Estilos customizados
│   │   └── index.css            # Estilos globais + Tailwind
│   ├── public/
│   │   ├── logo-maori.png       # Logo oficial
│   │   └── *.jpg                # Fotos da pousada
│   ├── tailwind.config.js       # Configuração Tailwind
│   ├── package.json
│   └── README.md
└── README.md                     # Este arquivo
```

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Navegar até a pasta do projeto
cd guest-guide

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run preview
```

## 📱 Deploy

### Opções Recomendadas (Gratuitas)

#### 1. Vercel (Recomendado)
```bash
npm install -g vercel
cd guest-guide
vercel
```

#### 2. Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` após `npm run build`

#### 3. GitHub Pages
Configurar no `package.json` e executar:
```bash
npm run deploy
```

## 🎯 Como Disponibilizar para Hóspedes

### 1. Gerar QR Code
Após o deploy, gere um QR Code com a URL do site:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Code Monkey](https://www.qrcode-monkey.com/)

### 2. Personalizar QR Code
- Adicione o logo da Pousada Maori
- Use as cores turquesa (#1BB8CE)
- Adicione texto "Guia do Hóspede"

### 3. Distribuir
Imprima e coloque em:
- Cada quarto (porta ou mesa de cabeceira)
- Recepção (balcão e parede)
- Áreas comuns (piscina, café da manhã)

## 🎨 Recursos Visuais

### Animações
- Entrada suave dos elementos
- Cards com hover effect
- Logo com animação de rotação
- Expansão suave dos cards de praias
- Transições fluidas entre estados

### Responsividade
- **Mobile:** 1 coluna
- **Tablet:** 2 colunas
- **Desktop:** 3 colunas
- Layout adaptativo para todos os tamanhos

## 📞 Suporte e Atualizações

Para atualizar o conteúdo:
1. Edite `src/App.tsx` para informações gerais
2. Edite `src/components/BeachCard.tsx` para praias
3. Teste localmente: `npm run dev`
4. Faça novo deploy

## 🎉 Resultado Final

Um guia digital completo que:
- ✅ Reflete a identidade visual da Pousada Maori
- ✅ Melhora a experiência do hóspede
- ✅ Reduz perguntas repetitivas na recepção
- ✅ Moderniza a comunicação
- ✅ Pode ser atualizado facilmente
- ✅ É totalmente responsivo
- ✅ Tem animações profissionais
- ✅ Oferece informações detalhadas das praias

---

**Desenvolvido com ❤️ para os hóspedes da Pousada Maori**

**Versão:** 1.0.0
**Data:** Março 2026
