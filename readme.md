# Curto API

API link: [curto-api.herokuapp.com](http://curto-api.herokuapp.com/)

> RESTful API to Curto Café

Being used by:

- [Curto Tabuleiro](https://github.com/felippenardi/curto-tabuleiro), a board-game like self payment app for Curto Café

## Routes

`GET /products` - Get all products in a JSON format

`GET /dailyConsumption` - Return daily consumption in a JSON format

`PUT /dailyConsumption` - Update daily consumption

## Run API locally

1. Install [MongoDB](http://www.mongodb.org/) and [NodeJS](http://nodejs.org/download/), if you don't have them already.

2. Install all project dependencies:

```sh
  $ npm install
  ```

3. Start **MongoDB**, for run without specifying paths:

```sh
  $ mongod
  ```

4. Start app (http://localhost:5000/)

```sh
  $ node app
  ```

## Run Tests

```sh
  $ npm test
  ```
