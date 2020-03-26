const express = require('express'); 
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
// Rotas e recursos

// metodos http

// GET = Buscar/listar uma informação

// POST = Criar uma informação no backend

//  PUT = alterar uma informação no Backend

// Delete = Deletar uma informação no Backend 

/* 
    Tipos de parametros

    Query = ?parametros nomeados enviados na rota após  "?" (filtros, paginação)

    Route params =  parametros utilizados para  identificar  recursos

    Request Body = Corpo da requisição, criar ou alterar recursos


*/

/* 
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server

    NoSQL: MongoDB, CouchDB , etc
*/


/*
    Driver: SELECT * FROM users

    Query Builders: table('users').select('*').where
*/


app.listen(3333)