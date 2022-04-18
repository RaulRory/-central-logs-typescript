# Central de Erros

## Sobre
Este repositório contém uma nova solução para o projeto [Central de Erros](https://github.com/codenation-dev/squad-4-ad-nodejs-kroton-1)

## Depêndencias

* Typescripit
* Docker Compose
* Prisma
* Jest

## Instalação

1. Caso não tenha instalado em sua maquina instale o docker, docker-compose e make
```bash
    sudo apt install make
    sudo snap install docker
    sudo apt install docker-compose
    sudo usermod -aG docker $USER
```

## Testando

- Para inicar a instalar as dependencias e inicar aplicação rode o comando
```bash
make init
```
- Para inicar a aplicação rode o comando
```bash
make start
```
- Buscar por logs ou users
```bash
curl -X GET http://localhost:3000/logs
```
```bash
curl -X GET http://localhost:3000/users
```

- Buscar por logs ou users com ID
```bash
curl -X GET http://localhost:3000/logs/<ID>
```
```bash
curl -X GET http://localhost:3000/users/<ID>
```

- Criando novo log ou user
```bash
curl -X POST http://localhost:3000/log/create -H \ 
'Content-Type: application/json' \
-d '<JSON>'
```

```bash
curl -X POST http://localhost:3000/user/create -H \ 
'Content-Type: application/json' \
-d '<JSON>'
```
