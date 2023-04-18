![image](https://user-images.githubusercontent.com/50504050/228393842-d5ebe930-d3ae-4fc8-a18a-f1d91a2b98e2.png)

# Rocketseat Experience 2023 - Mobile App

Repositório do app construído pela comunidade para o [maior evento de programação do Brasil](https://www.rocketseat.com.br/eventos/rsxp)! :brazil:

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/diego3g/rsxp-2023
cd rsxp-2023
npm install
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Além do Node.js, utilizamos o banco de dados PostgreSQL e **recomendamos** o uso do Docker para executar o banco em sua máquina.

> Você pode instalar o Docker seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Docker-6290d9994b0b4555a153576a1d97bee2).

Nesse projeto, usamos o serviço de autenticação [Clerk](https://clerk.com/), e você precisará configurá-lo para rodar o projeto em sua máquina.

> Você pode configurar o Clerk seguindo [esse guia](./docs/getting-started-with-clerk.md).

Após instalar o Node.js e o Docker, vamos acessar a pasta do projeto back-end, subir o serviço do banco de dados, configurar nossas variáveis ambiente e, então, subir o servidor HTTP.

```sh
cd apps/server

# Copiar o arquivo com os dados de conexão e demais variáveis ambiente
cp .env.example .env

# Subir o serviço do PostgreSQL via docker (caso não tenha instalado o PostgreSQL em seu computador)
docker-compose up -d

# Rodar as migrations do prisma
npx prisma migrate dev

# Subir o servidor HTTP
npm run start:dev
```

### Mobile

Para executar o app mobile do RS/XP utilizamos o Expo, uma ferramenta incrível da comunidade React Native. Além do Expo, é necessário que você utilize algum emulador local ou um dispositivo físico pra visualizar a aplicação.

> Você pode instalar o Expo e os emuladores seguindo [esse guia](https://react-native.rocketseat.dev/).

Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
# Caso esteja usando Android
npm run android

# Caso esteja usando iOS
npm run ios

# Caso esteja usando um dispositivo físico
npm start
```

## Links rápidos ↗

- [Documentação Principal | Notion 📖](https://rsxp-2023.notion.site/App-Mobile-d98e3a215a604a8192b8aa99d7887708)
- [Layout | Figma 🎨](https://www.figma.com/file/mSZqH7CG5fXBO0jsHMyMts/RS%2FXP-23-App?node-id=0%3A1&t=VZ191dsu8YEtsdFX-1)

## Tech Stack 💜

A _stack_ foi escolhida pela comunidade durante a [live de kick-off](https://www.youtube.com/watch?v=dDO0YKuHABY).

**📱 Mobile:**

- [Expo](https://github.com/expo/expo)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [NativeWind](https://github.com/marklawlor/nativewind) _(Tailwind para o React Native)_

**🏧 Server:**

- [NestJS](https://github.com/nestjs/nest) `(REST)`
- [Prisma](https://github.com/prisma/prisma)
- [PostgreSQL](https://github.com/postgres) [`Neon Database`](http://neon.tech/)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Sympla API](https://www.sympla.com.br/api-doc/index.html)

## Funcionalidades 🚀

Até o momento, levando em consideração o prazo de 2 semanas _(Due: 11/04/2023)_, listamos algumas funcionalidades básicas que devemos entregar. Caso sobre tempo, podemos trabalhar em funcionalidades secundárias, _backlog_.

### Funcionalidades 1.0 (MVP):

- [ ] **Comprar ingresso**
      Redirecionar o usuário para o [Sympla](https://www.sympla.com.br/) para efetuar a compra.

- [ ] **Visualizar meu ingresso**
      Uma vez que tenha o código localizador do ingresso emitido pelo Sympla, o usuário poderá conectar seu ingresso à sua conta no app e, dessa forma, terá acesso pelo app.

- [ ] **Compartilhar ingresso nas redes sociais**
      Como uma forma de hypar o evento, o usuário poderá gerar uma imagem - _thumbnail_ com sua foto para divulgar nas redes! `#VouNaRSXP! 🚀💜`

### Funcionalidades 2.0:

- [ ] **Autenticação**
- [ ] **Sistema de convites**
  - Desconto p/ convidar
  - Brindes p/ quem mais convidar
- [ ] **Countdown pro evento**
- [ ] **Dados gerais do evento**
  - Localização
  - Data & Hora
- [ ] **FAQ** - (_Frequently Asked Questions / Perguntas Frequentes_)

- [ ] **Feed de notícias**
      Criar algo tipo um Twitter interno para evento. Tal aba será dedicada aos palestrantes ou organizadores para enviar avisos para os membros.

- [ ] **Lista dos palestrantes**

## Contribuições 🆘

Estamos muito felizes em ter vocês interessados em contribuir com nosso projeto. Queremos deixar claro que a participação de vocês é muito importante para o sucesso do nosso aplicativo, e valorizamos muito as ideias e contribuições que vocês podem trazer.

Para facilitar a interação entre todos, gostaríamos de lembrar alguns pontos importantes sobre como contribuir com nosso projeto:

### Discussões

Utilizem a [aba de discussões](https://github.com/diego3g/rsxp-2023/discussions) para compartilhar ideias e sugestões para o projeto. Essa é uma ótima maneira de começar uma discussão sobre algo que possa ser melhorado ou adicionado ao aplicativo.

### Issues

Caso encontrem algum problema durante o uso do aplicativo ou queiram sugerir uma nova tarefa, utilizem a [aba de issues](https://github.com/diego3g/rsxp-2023/issues). Lá, vocês podem postar as suas sugestões e reportar problemas encontrados. É importante lembrar que novas tarefas só devem ser criadas se a comunidade aprovar na aba de discussões.

### Pull Requests

Se vocês quiserem contribuir com código, podem fazer um [fork do repositório](https://github.com/diego3g/rsxp-2023/fork) e trabalhar em suas próprias cópias. Quando finalizarem, enviem um [pull request](https://github.com/diego3g/rsxp-2023/pulls) para que possamos revisar o código e integrar ao projeto principal.

`#Dica 💡`: Não tenha medo de fazer um _Pull Request_, utilize dessa oportunidade para receber críticas construtivas de outras pessoas acerca do seu código e melhore suas habilidades!

### Conduta

Para que esse projeto prospere é preciso manter um ambiente saudável e respeitoso, Pedimos que leiam e sigam as [nossas regras](https://discord.com/channels/327861810768117763/804506874362986507) para garantir que todos possam contribuir em um ambiente agradável e produtivo.

Mais uma vez, queremos agradecer a vocês por estarem dispostos a contribuir com o nosso projeto. Estamos ansiosos para trabalhar com vocês e construir algo incrível juntos!

`#JuntosParaOPróximoNível 🚀`

## Roadmap

- **MVP** `v1.0.0` 📅 Meta: 11/04/2023 - Lançar o app com as funcionalidades listadas acima e acordadas durante a [live de kick-off](https://www.youtube.com/watch?v=dDO0YKuHABY).

- Só o tempo dirá... 👀

## Contribuidores 😊

<a href="https://github.com/diego3g/rsxp-2023/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=diego3g/rsxp-2023" />
</a>

## Licença 📃

[MIT](https://github.com/diego3g/rsxp-2023/blob/main/LICENSE)
