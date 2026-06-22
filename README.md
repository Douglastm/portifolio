# Portfolio Frontend

Frontend do portfólio pessoal de Douglas Magalhães, desenvolvido com React, TypeScript e Vite. O projeto apresenta informações profissionais, experiências, canais de contato, páginas institucionais e uma estrutura visual responsiva voltada para apresentação de perfil e captação de oportunidades.

## Visão geral

Este projeto é uma aplicação SPA (Single Page Application) com roteamento no cliente usando `react-router-dom`. O site foi estruturado para funcionar como vitrine profissional, com foco em:

- apresentação pessoal;
- histórico profissional;
- seção de projetos;
- canais de contato;
- páginas legais de privacidade e direitos autorais.

O layout é compartilhado entre as páginas por meio de um componente principal com cabeçalho e rodapé fixos na navegação do site.

## Preview funcional

O portfólio atualmente possui as seguintes áreas:

- `Início`: apresentação principal, localização, cargo atual, download de currículo e links sociais.
- `Sobre`: resumo profissional e timeline de experiências com modal de detalhes.
- `Projetos`: página institucional para apresentação de cases e proposta de valor, com seção de "em breve".
- `Contato`: links diretos para email e redes, além de CTA para oportunidades e freelas.
- `Política de Privacidade`: conteúdo institucional sobre uso de dados.
- `Direitos`: regras de uso de conteúdo e direitos autorais.

## Stack utilizada

- `React 19`
- `TypeScript`
- `Vite`
- `React Router DOM`
- `lucide-react`
- `react-icons`
- `CSS Modules`
- `ESLint`

## Scripts disponíveis

No arquivo `package.json`, os scripts disponíveis são:

```bash
npm run dev
```

Inicia o servidor de desenvolvimento com Vite.

```bash
npm run build
```

Executa a checagem de tipos com TypeScript e gera a build de produção.

```bash
npm run preview
```

Sobe uma pré-visualização local da build gerada.

```bash
npm run lint
```

Executa a análise estática com ESLint.

## Como executar localmente

### Pré-requisitos

- `Node.js` instalado
- `npm` instalado

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Depois, acesse a URL exibida pelo Vite no terminal, normalmente:

```text
http://localhost:5173
```

### Build de produção

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/`.

## Estrutura do projeto

```text
frontend/
├── public/
│   ├── cv.pdf
│   ├── favicon.svg
│   ├── icons.svg
│   ├── Logo.png
│   └── Profile_photo.jpeg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   └── images/Logo.png
│   ├── components/
│   │   ├── ExperienceModal/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── MenuModal/
│   │   ├── ProjectModal/
│   │   ├── TagInfo/
│   │   └── TimelineCard/
│   ├── layout/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── PrivacyPolicy/
│   │   ├── Projects/
│   │   └── Rights/
│   ├── routes/
│   │   └── router.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Arquitetura da aplicação

### Entrada da aplicação

O ponto de entrada está em `src/main.tsx`, onde a aplicação é renderizada com `ReactDOM` e o `RouterProvider`.

### Roteamento

As rotas ficam centralizadas em `src/routes/router.tsx` usando `createBrowserRouter`.

Rotas cadastradas:

- `/`
- `/about`
- `/projects`
- `/contact`
- `/privacy-policy`
- `/rights`

### Layout compartilhado

`src/layout/MainLayout.tsx` encapsula:

- `Header`
- conteúdo principal via `Outlet`
- `Footer`

Isso garante consistência visual e estrutural entre todas as páginas.

## Páginas principais

### Home

Arquivo: `src/pages/Home/Home.tsx`

Responsável por apresentar:

- nome e título profissional;
- localização;
- cargo atual;
- CTA para download do currículo;
- CTA para a página de contato;
- links para LinkedIn, GitHub e Instagram;
- foto de perfil.

### About

Arquivo: `src/pages/About/About.tsx`

Apresenta:

- resumo profissional detalhado;
- timeline de experiências;
- abertura de modal ao clicar em uma experiência.

Os dados das experiências estão definidos localmente em um array estático dentro da própria página.

### Projects

Arquivo: `src/pages/Projects/Projects.tsx`

A página foi montada para comunicar posicionamento profissional e preparar espaço para publicação de cases. Atualmente inclui:

- hero com proposta de valor;
- estatísticas resumidas;
- seção de projetos em breve;
- blocos sobre forma de trabalho;
- CTA para novos projetos.

Observação: os cards de projetos ainda não estão publicados e há um comentário no código indicando que essa seção permanece oculta temporariamente.

### Contact

Arquivo: `src/pages/Contact/Contact.tsx`

Centraliza:

- email;
- LinkedIn;
- GitHub;
- Instagram;
- mensagem de disponibilidade;
- CTA para iniciar conversa.

### Privacy Policy

Arquivo: `src/pages/PrivacyPolicy/PrivacyPolicy.tsx`

Página institucional com texto sobre:

- coleta de informações;
- uso dos dados;
- compartilhamento;
- armazenamento;
- direitos do usuário;
- atualizações da política.

### Rights

Arquivo: `src/pages/Rights/Rights.tsx`

Página institucional com regras sobre:

- titularidade do conteúdo;
- uso permitido;
- restrições;
- referências de terceiros;
- solicitações de correção ou remoção.

## Componentes relevantes

### `Header`

Arquivo: `src/components/Header/Header.tsx`

Funções principais:

- navegação desktop;
- destaque visual da rota ativa;
- menu mobile com abertura e fechamento local via estado;
- renderização do `MenuModal`.

### `Footer`

Arquivo: `src/components/Footer/Footer.tsx`

Contém:

- resumo profissional;
- links sociais;
- CTA de contato;
- mapa interno do portfólio;
- links legais.

### `TimelineCard`

Arquivo: `src/components/TimelineCard/index.tsx`

Componente clicável usado na página `Sobre` para representar cada experiência profissional.

### `ExperienceModal`

Arquivo: `src/components/ExperienceModal/index.tsx`

Exibe detalhes de uma experiência:

- período;
- empresa;
- cargo;
- resumo;
- principais atividades.

Também fecha com:

- clique no overlay;
- botão de fechar;
- tecla `Escape`.

### `MenuModal`

Arquivo: `src/components/MenuModal/index.tsx`

Exibe o menu de navegação em telas menores.

### `TagInfo`

Arquivo: `src/components/TagInfo/index.tsx`

Componente simples para exibir tags com ícone e texto, usado na página inicial.

## Estilo e organização visual

O projeto utiliza `CSS Modules`, com um arquivo de estilo por página ou componente. Isso ajuda a:

- isolar escopo de classes;
- evitar colisões de estilo;
- manter a estrutura visual modular.

Arquivos como `Home.module.css`, `Header.module.css` e `Footer.module.css` concentram a estilização de cada parte da interface.

## Assets e conteúdo estático

A pasta `public/` armazena arquivos servidos diretamente pelo Vite, incluindo:

- `cv.pdf`: currículo para download;
- `Profile_photo.jpeg`: foto de perfil;
- `Logo.png`: logo pública;
- `favicon.svg`: ícone do navegador.

Já `src/assets/` contém imagens importadas diretamente pelos componentes.

## Estado atual do projeto

Hoje o projeto funciona majoritariamente como um portfólio institucional e pessoal. Alguns pontos importantes:

- não existe backend integrado neste repositório;
- não há formulário com envio real de dados;
- não há variáveis de ambiente configuradas;
- o conteúdo exibido é estático e definido no próprio frontend;
- a página de projetos ainda está preparada para receber cases futuros.

## Como personalizar

### Atualizar informações pessoais

Revise principalmente:

- `src/pages/Home/Home.tsx`
- `src/pages/About/About.tsx`
- `src/pages/Contact/Contact.tsx`
- `src/components/Footer/Footer.tsx`

Nesses arquivos estão:

- nome;
- descrição profissional;
- cargo atual;
- redes sociais;
- emails;
- textos institucionais.

### Atualizar experiências

As experiências da timeline estão no array `experiences` em:

- `src/pages/About/About.tsx`

Cada item possui:

- `startDate`
- `endDate`
- `company`
- `role`
- `summary`
- `highlights`

### Publicar projetos reais

O local mais natural para evoluir a seção é:

- `src/pages/Projects/Projects.tsx`

Hoje a página já possui estrutura visual pronta para receber:

- cards de projeto;
- links externos;
- stacks utilizadas;
- resultados;
- desafios técnicos.

### Alterar navegação

Os links principais estão no `Header` e no `Footer`:

- `src/components/Header/Header.tsx`
- `src/components/Footer/Footer.tsx`

As rotas oficiais ficam em:

- `src/routes/router.tsx`

## Qualidade e manutenção

O projeto já inclui:

- tipagem com TypeScript;
- roteamento organizado;
- componentização básica;
- lint com ESLint;
- build de produção com Vite.

Pontos que podem ser evoluídos no futuro:

- testes automatizados;
- integração com analytics;
- formulário funcional de contato;
- página de projetos com dados reais;
- SEO mais robusto;
- metadata social por página;
- internacionalização, se necessário.

## Deploy

Por ser um projeto Vite com SPA em React, pode ser publicado facilmente em serviços como:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Ao fazer deploy, é importante garantir suporte a fallback de rotas do `react-router-dom` quando necessário, já que o projeto usa `createBrowserRouter`.

## Observações importantes

- O arquivo `src/App.tsx` não é usado como ponto principal de renderização no fluxo atual; a aplicação entra por `src/main.tsx` com `RouterProvider`.
- Existe um componente `ProjectModal` no repositório, mas ele não está integrado ao fluxo principal atual.
- O nome da pasta e alguns textos usam a grafia `Portifólio`, enquanto o termo mais comum em português é `Portfólio`. Se desejar, isso pode ser padronizado depois.

## Licença

Este projeto não possui uma licença definida neste repositório. Se a intenção for torná-lo público para reutilização, vale adicionar uma licença explícita.
