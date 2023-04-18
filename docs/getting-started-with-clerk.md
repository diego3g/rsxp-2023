# Configurando autenticação com **Clerk**

[Integrando Clerk no seu projeto React Native](https://clerk.com/docs/quickstarts/get-started-with-expo)

Antes de começar, você precisa criar uma conta no [painel do Clerk](https://dashboard.clerk.com/).

## Criando aplicação no **Clerk**

1. Acesse o [painel do Clerk](https://dashboard.clerk.com/) e clique no botão **Add Application**.
2. Será exibida uma lista de provedores de autenticação. Selecione o provedor do **Github**.
3. Escolha o nome da sua aplicação e clique no botão **CREATE APPLICATION**.

## Adicionando **Publishable key** e **Secret key** no projeto

Depois de criar sua aplicação no Clerk, você será redirecionado para uma nova página.

Nessa nova página vá na seção **developers** > **API Keys**. Você encontrará dois tipos de chaves: a chave **Publishable key**, que será utilizada na aplicação [mobile](../apps/mobile) e a chave **Secret key**, que será utilizada na aplicação [server](../apps/server).

Para adicionar a chave **Publishable key** no projeto mobile, navegue até a pasta `/apps/mobile` e execute o seguinte comando no terminal para fazer uma cópia do arquivo `.env.example` para o arquivo `.env`:

```sh
cp .env.example .env
```

Abra o arquivo `.env` e adicione a variável de ambiente **CLERK_PUBLISHABLE_KEY**:

```.env
CLERK_PUBLISHABLE_KEY = COLE_AQUI_A_PUBLISHABLE_KEY_DA_SUA_APLICAÇÃO_CLERK
```

Repita o mesmo procedimento para a aplicação server. Navegue até a pasta `/apps/server`, execute o comando `cp .env.example .env`. Em seguida, adicione a variável de ambiente **CLERK_SECRET_KEY** no arquivo `.env`:

```.env
CLERK_SECRET_KEY = COLE_AQUI_A_CLERK_SECRET_KEY_DA_SUA_APLICAÇÃO_CLERK
```

## Adicionando **JWT public key**

É necessário adicionar a **JWT public key** da nossa aplicação Clerk ao projeto `server`, pois essa chave é utilizada para validar a autenticidade do token **JWT** enviado pelo usuário. Ao validar o token, é possível garantir que a sessão do usuário seja segura e que o acesso aos recursos protegidos esteja restrito apenas aos usuários autenticados.

> Referências: [Networkless Token Verification](https://clerk.com/docs/reference/node/networkless-token-verification), [Manual JWT Verification
> ](https://clerk.com/docs/request-authentication/validate-session-tokens)

Para adicionar a **JWT public key** da sua aplicação Clerk ao projeto `server`, siga estes passos:

1. Acesse a seção **developers** > **API Keys** no [painel do Clerk](https://dashboard.clerk.com/).
2. Clique no botão **Advanced** localizado no final da página.
3. Procure a seção **JWT public key** e selecione a aba **PEM public key** no lado esquerdo.
4. Copie a **PEM public key** correspondente.

Com o **PEM public key** em mãos, abra o arquivo `.env` do projeto `server` e adicione a variável de ambiente **CLERK_JWT_KEY**:

```.env
CLERK_JWT_KEY = COLE_AQUI_A_PEM_PUBLIC_KEY_DA_SUA_APLICAÇÃO_CLERK
```
