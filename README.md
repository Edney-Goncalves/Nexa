# Nexa Fiscal — Landing Page

Landing page para uma consultoria fiscal e tributária fictícia, criada como **projeto de portfólio**. O objetivo da página é apresentar os serviços e levar o visitante a iniciar uma conversa pelo WhatsApp.

> Marca, textos, número de telefone e e-mail são fictícios e servem apenas para demonstração. Empresas reais do segmento foram usadas somente como referência de estrutura e experiência de usuário, sem copiar conteúdo ou identidade visual.

## Demonstração

<!-- Substitua pelo link do deploy -->
🔗 https://seu-link-aqui

## Funcionalidades

- Página única com navegação por âncoras e rolagem suave
- Header fixo com efeito ao rolar e menu hambúrguer no mobile
- Seções: hero, problema e solução, serviços, diferenciais, como funciona, sobre, FAQ e contato
- Botões de WhatsApp em pontos estratégicos, com mensagem pré-preenchida
- FAQ em accordion com animação de abertura
- Animações de entrada discretas, respeitando `prefers-reduced-motion`
- Tema claro e escuro automático, conforme a preferência do sistema
- Gráficos e ícones feitos com CSS e SVG, sem imagens externas

## Tecnologias

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- CSS puro, com variáveis para tema

## Estrutura

```
src/
├── components/     # Header, Hero, Problem, Services, Benefits, Process, About, FAQ, Contact, Footer...
├── hooks/          # useReveal (animação ao entrar na viewport)
├── config.ts       # número do WhatsApp, mensagem e e-mail
├── data.ts         # textos de serviços, FAQ, etapas e diferenciais
├── App.tsx
├── main.tsx
└── index.css
```

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # gera a pasta dist/ para deploy
npm run preview   # visualiza o build localmente
```

## Personalização

- **WhatsApp:** altere `WHATSAPP_NUMBER` e `WHATSAPP_MESSAGE` em `src/config.ts`. Todos os botões usam essa configuração.
- **Conteúdo:** edite os textos de serviços, FAQ, etapas e diferenciais em `src/data.ts`.
- **Cores e tipografia:** ajuste as variáveis CSS no início de `src/index.css`.

## Deploy

O build gera arquivos estáticos e funciona em qualquer hospedagem:

- **Netlify:** arraste a pasta `dist/` em app.netlify.com/drop, ou conecte o repositório
- **Vercel:** importe o repositório (build `npm run build`, saída `dist`)
- **GitHub Pages:** publique o conteúdo de `dist/` (se o site ficar em subpasta, defina `base` em `vite.config.ts`)

## Decisões de projeto

- **Foco em conversão:** o visitante entende o problema, conhece a solução e os serviços, ganha confiança pelos diferenciais e chega ao WhatsApp por botões distribuídos ao longo da página.
- **Visual sóbrio:** azul-marinho e azul como base, ciano reservado para as ações, bastante espaço em branco e uma única família tipográfica (Manrope).
- **Conteúdo separado do layout:** os textos ficam em `data.ts`, o que facilita adaptar a página para outro cliente.
- **Sem dependências extras:** apenas React, sem bibliotecas de UI ou de animação.

## Acessibilidade e SEO

- HTML semântico com hierarquia de títulos
- Foco visível e navegação por teclado
- `aria-label` e `aria-expanded` no menu e nos botões de ícone
- `title`, `meta description` e Open Graph configurados

## Licença

Projeto de portfólio para fins demonstrativos.
