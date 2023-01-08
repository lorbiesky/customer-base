# Desafio RSM

### Apps

- `web`: Aplicação web construída em [AngularJs](https://angular.io/cli).
- `server`: Web api construída em [.NET 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).

## Primeiros passos

- Clone esse repositório dentro de sua máquina local

```bash
git clone https://github.com/lorbiesky/desafio-rsm.git
```

ou caso você use Github CLI

```bash
gh repo clone lorbiesky/desafio-rsm
```

---

## Instalação

### Web:

- Acesse a pasta da aplicação

```bash
cd ./web
```

- Certifique que esteja usando a versão `18` do `NodeJs`

- instale as dependências com o seguinte comando

```bash
npm install
```

ou

```bash
yarn install
```

### Banco de dados:

- Acesse a pasta do server

```bash
cd ./server
```

- Certifique de ter instalado o [Docker e o Docker Compose](https://docs.docker.com/) em sua máquina.

- Suba o container do banco de dados através do seguinte comando:

```bash
docker compose up -d
```

ou

```bash
docker-compose up -d
```

### Server:

- Para rodar a api localmente, é recomendado o uso do [Visual Studio](https://visualstudio.microsoft.com/pt-br/).
  Porém podemos rodar também através do [CLI do .NET](https://learn.microsoft.com/pt-br/dotnet/machine-learning/how-to-guides/install-ml-net-cli?tabs=windows)

- Certifique que tenha instalado a [SDK](https://dotnet.microsoft.com/pt-br/download/dotnet/6.0) do `.NET 6.0`

- Entre na pasta `server/CustomerSistem`

```bash
cd ./server/CustomerSistem
```

- Rode as migrations com o seguinte comando para gerar as tabelas:

```bash
dotnet ef database update
```

ou caso esteja usando o Visual Studio, utilize o seguinte comando dentro do `Package Manager Console`

```bash
Update-Database -Context CustomerSistemDBContex
```

---

## Execução

### Web:

- Dentro da pasta web execute o seguinte comando:

```bash
npm run start
```

ou

```bash
yarn run start
```

- Acesse a aplicação web através do link <http://localhost:4200/>

### Server:

- Através da CLI, acesse a pasta `server/CustomerSistem` e rode o seguinte comando:

```bash
dotnet run
```

ou caso esteja usando o Visual Studio, abra a `Solution` do projeto localizado na pasta `server/` e pressione `F5`
