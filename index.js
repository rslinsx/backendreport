const express = require('express');
const app = express();
const port = 1313;


//import conection mongodb
const NewUser = require('./mongodb');

//Rota teste
app.get('/', (req, res)=>{
    res.send('hello. TUDO OK');
});


app.get('/outrarota', (req, res)=>{
    res.send('outra rota');
});

//Rotas mongodb


// iniciar servidor
app.listen(port, ()=>{
    console.log('Servidor rodando blz');
});

