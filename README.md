# Projeto Coffee Shop

Este projeto foi primeiro desafio proposto pela Gama Academy no treinamento Hiring Coders. 

## Objetivo
Criar uma landing page com cadastro de e-mail para visitante cadastrar e receber novidades e/ou promoções de um sistema de e-commerce.

## Instalar e rodar localmente
1. Clonar o repositório
2. Acessar a pasta `coffeeshop-sales-landing-page` 
3. Instalar o pacote npm 
    ```
    $ npm install
    ```
4. Rodar localmente
    ```
    $ npm start
    ```
5. Acesse localhost:3000 em seu browser

## Live demo
Foi feito deploy do projeto na plataforma [Netlify](https://www.netlify.com/)
Acesse [CoffeeShop](https://coffeeshop-sales.netlify.app/)

## Tecnologias utilizadas
- React (create-react-app)
- HTML5
- CSS

## Hot Reload durante desenvolvimento
Rodando `npm start` pelo terminal do WSL, hot reload não estava funcionando.

"Workaround" encontrado foi criar um arquivo `.env` na raiz do projeto e colocar essas varíaveis:
```
FAST_REFRESH=false
CHOKIDAR_USEPOLLING=true
```

## Crédito
- src/assets/bg-coffee-beans.jpg: foi criado por dashu83 - [br.freepik.com](https://br.freepik.com/fotos/fundo)

