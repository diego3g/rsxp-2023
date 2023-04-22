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

## Adicionando no servidor

Abra o arquivo `.env` do projeto `server` e adicione a variável de ambiente **CLERK_SECRET_KEY**:

```.env
CLERK_SECRET_KEY="COLE_AQUI_A_SECRET_KEY"
```
