# EcoPulse | React, TypeScript e Vite

Migração didática do site EcoPulse para React. Mantém as sete páginas, a proposta de sustentabilidade, as imagens e os vídeos do repositório original. A equipe tem cinco integrantes, incluindo Kauã Barros Ferreira.

**Atenção: esta é a versão limitada ao conteúdo confirmado como estudado. Não atende integralmente à rubrica da Sprint 3, porque não inclui hooks, rotas com parâmetros ou React Hook Form.** Leia [Pendências do Challenge](docs/REQUISITOS.md) antes de entregar.

![Identidade do EcoPulse](public/images/hero-background.jpg)

## Comece por aqui

1. Extraia o ZIP e abra a pasta `ecopulse-react` no VS Code.
2. Abra o terminal nessa pasta, onde está o arquivo `package.json`.
3. Execute:

```bash
npm install
npm run dev
```

4. Abra o endereço que aparecer no terminal, normalmente `http://localhost:5173`.

Use Node.js 22.12 ou superior da linha 22, ou Node.js 24 ou superior. É necessária internet para a instalação inicial das dependências. Imagens, vídeos e dados do site são locais; o site não depende de uma API depois de instalado.

Não abra `index.html` com duplo clique e não use Live Server. Agora o projeto precisa do servidor do Vite. Para encerrar, pressione `Ctrl+C` no terminal.

Se ocorrer um erro, confira primeiro:

- se o terminal está na pasta que contém `package.json`;
- se `npm install` terminou sem erro;
- se a versão exibida por `node -v` atende ao requisito acima;
- se você abriu o endereço exibido pelo Vite, e não o arquivo HTML diretamente.

## O que foi utilizado

| Tecnologia ou conceito | Onde aparece                                                                   |
| ---------------------- | ------------------------------------------------------------------------------ |
| React                  | Componentes de função que retornam JSX                                         |
| TypeScript             | Tipos simples das props e inferência dos objetos dos arrays                    |
| Vite                   | Servidor de desenvolvimento e build                                            |
| React Router DOM       | `BrowserRouter`, `Routes`, `Route`, `Link` e `NavLink`                         |
| Props                  | Textos, imagens e links recebidos pelos cards                                  |
| Desestruturação        | Props explicitadas nos parâmetros de cada componente                           |
| `children`             | Conteúdo do componente `BotaoLink`                                             |
| JavaScript             | Arrays, objetos, `map`, funções, evento de formulário e operador ternário      |
| Tailwind CSS           | Cores, espaçamentos, Flexbox, Grid, hover e responsividade                     |
| HTML nativo            | FAQ com `details` e `summary`; formulário com `required`, `type` e `minLength` |

Não foram usados `useState`, `useEffect`, `useNavigate`, `useParams`, React Hook Form, Context, Redux, APIs, Axios, banco de dados, bibliotecas de interface ou templates visuais externos. O fato de o React Router usar hooks internamente não significa que a aplicação implemente os hooks exigidos pelo PDF.

O arquivo `src/index.css` contém apenas `@import "tailwindcss"`. A estilização da interface está nas classes dos componentes. O Tailwind está ligado ao Vite pelo plugin oficial; não é necessário rodar `npx tailwindcss init`.

## Páginas e navegação

| Rota                       | Componente          | Conteúdo                                            |
| -------------------------- | ------------------- | --------------------------------------------------- |
| `/`                        | `Home.tsx`          | Apresentação e quatro soluções                      |
| `/sobre`                   | `Sobre.tsx`         | Proposta, missão, visão e valores                   |
| `/integrantes`             | `Integrantes.tsx`   | Equipe e links profissionais                        |
| `/faq`                     | `Faq.tsx`           | Perguntas que abrem e fecham                        |
| `/sobre-souly`             | `SobreSouly.tsx`    | Apresentação e funcionalidades propostas do mascote |
| `/souly-como-guia`         | `SoulyComoGuia.tsx` | Os dois vídeos demonstrativos originais             |
| `/contato`                 | `Contato.tsx`       | Formulário demonstrativo, sem envio                 |
| Qualquer rota desconhecida | `NaoEncontrada.tsx` | Página 404 com retorno à Home                       |

`Header` e `Footer` ficam fora de `Routes`, no `App`. Por isso são compartilhados. A navegação interna usa React Router; os perfis externos e os arquivos de vídeo usam links HTML normais.

## Organização dos arquivos

| Caminho                     | Responsabilidade                                               |
| --------------------------- | -------------------------------------------------------------- |
| `index.html`                | Documento inicial com a `div` onde React será montado          |
| `src/main.tsx`              | Inicializa React, importa Tailwind e configura `BrowserRouter` |
| `src/App.tsx`               | Define o layout comum e as rotas                               |
| `src/components/`           | Header, Footer, BotaoLink, TituloPagina e cards reutilizáveis  |
| `src/pages/`                | As páginas da aplicação                                        |
| `src/data/`                 | Arrays de soluções, integrantes e perguntas                    |
| `src/index.css`             | Importação do Tailwind                                         |
| `public/images/`            | Imagens originais do projeto                                   |
| `public/videos/`            | Vídeos originais, com nomes simplificados                      |
| `docs/GUIA-APRESENTACAO.md` | Explicação do código e roteiro de estudo                       |
| `docs/REQUISITOS.md`        | Requisitos atendidos e pendências da avaliação                 |
| `docs/TESTES.md`            | Verificações realizadas e checklist manual                     |
| `package.json`              | Dependências e comandos npm                                    |
| `package-lock.json`         | Versões exatas resolvidas das dependências                     |
| `vite.config.ts`            | Configura os plugins de React e Tailwind                       |
| `tsconfig.json`             | Configura a checagem de TypeScript                             |

## O que funciona e o que é uma demonstração

Funciona nesta versão:

- navegação entre as páginas;
- reutilização dos componentes com dados diferentes;
- FAQ nativo do HTML;
- validação básica do formulário pelo navegador;
- mensagem que esclarece a simulação do formulário;
- controles de reprodução dos vídeos;
- classes responsivas para celular, tablet e desktop.

Não há login, chat real, cálculo de pontos, resgate de benefícios, armazenamento ou envio de mensagens. As propostas de parceria, recompensa e inteligência artificial do site original foram mantidas como conceitos, não como serviços ativos. Os vídeos demonstram a ideia, não uma integração com este site.

## Autores e créditos

Dados dos quatro integrantes originais preservados do repositório, com a inclusão de Kauã Barros Ferreira usando os dados e a foto fornecidos por Gabriel. A turma não estava informada: deve ser completada antes da entrega.

| Foto                                                           | Nome                        | RM               | Turma       | Perfis                                                                                                                  |
| -------------------------------------------------------------- | --------------------------- | ---------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| <img src="public/images/gabriel.jpg" width="64" alt="Gabriel"> | Gabriel Pereira de Oliveira | 572262           | A confirmar | [GitHub](https://github.com/Gabriel-Oliveira0611) · [LinkedIn](https://www.linkedin.com/in/gabriel-pereira-1aa4bb224/)  |
| <img src="public/images/adalto.jpg" width="64" alt="Adalto">   | Adalto Massahiro Nagabe     | 572298 — conferir | A confirmar | [GitHub](https://github.com/AdaltoNagabe) · [LinkedIn](https://www.linkedin.com/in/adalto-massashiro-nagabe-149685104/) |
| <img src="public/images/pedro.jpg" width="64" alt="Pedro">     | Pedro Henrique Carvalho     | 570492           | A confirmar | [GitHub](https://github.com/pedrohcnascimento) · [LinkedIn](https://www.linkedin.com/in/pedrohenriquecn07/)             |
| <img src="public/images/murillo.jpg" width="64" alt="Murillo"> | Murillo Siviero Lopes       | 572724           | A confirmar | [GitHub](https://github.com/MurilloSLopes) · [LinkedIn](https://www.linkedin.com/in/murillo-llopes-23out99/)            |
| <img src="public/images/kaua.jpg" width="64" alt="Kauã"> | Kauã Barros Ferreira | 571801 | A confirmar | [GitHub](https://github.com/KauaBF) · [LinkedIn](https://www.linkedin.com/in/kau%C3%A3-barros-ferreira-161a3a36b/) |

Origem das imagens, dos vídeos e do conteúdo: [repositório EcoPulse original](https://github.com/Gabriel-Oliveira0611/Challenge01-Front-end-design-engineering), commit `97088656fd21eefc568244ad59b647cd528ad590`.

Migração preparada com auxílio do ChatGPT a pedido de Gabriel. Os integrantes devem revisar, compreender e adaptar o código; não atribuir automaticamente a si mesmos etapas que não realizaram.

## Links e comandos

- [Repositório original do GitHub](https://github.com/Gabriel-Oliveira0611/Challenge01-Front-end-design-engineering). A migração deste pacote ainda não foi enviada ao GitHub.
- Vídeo de apresentação no YouTube: **pendente de gravação e publicação pela equipe**. Os dois vídeos do Souly não substituem esse vídeo de apresentação.
- Deploy: não realizado. A Sprint 4 pede publicação na Vercel; esta versão serve para execução local.

```bash
npm run typecheck
npm run build
npm run preview
```

`typecheck` verifica os tipos. `build` verifica os tipos e gera a pasta `dist`. `preview` serve o resultado do último build para teste local.

O projeto usa `BrowserRouter`. Em uma futura hospedagem, o servidor deverá redirecionar rotas de páginas para `index.html`, para que acessar ou atualizar `/sobre`, por exemplo, funcione. Para GitHub Pages em uma subpasta também será preciso configurar os caminhos de publicação; não basta enviar `dist` sem adaptação.

## Contato

Os links profissionais da equipe estão na seção de autores e na página Integrantes. `suporte@ecopulse.com` era um contato ilustrativo do projeto original e não foi verificado como endereço de atendimento. O formulário não faz envios.

## Documentação oficial consultada

- [React: props de componentes](https://react.dev/learn/passing-props-to-a-component)
- [React Router: configuração de rotas](https://reactrouter.com/start/declarative/routing)
- [Vite: início e execução](https://vite.dev/guide/)
- [Tailwind: instalação com Vite](https://tailwindcss.com/docs/installation/using-vite)
