const express = require('express');
const app = express();
const port = 1313;


//configuração middleware para aceitar json
app.use(express.json());
//import conection mongodb
const NewUser = require('./mongodb');

//Rotas
app.get('/', (req, res)=>{
    res.send('hello. TUDO OK');
});


app.post('/register', (req,res)=>{
    var novoUsuario = new NewUser({
        email: req.body.email,
        senha: req.body.senha,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        chave: true
    });
    
    novoUsuario.save().then(() => {
        console.log('Usuário cadastrado com sucesso!');
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    }).catch((err) => {
        console.error('Erro ao cadastrar o usuário:', err);
        res.status(500).json({ error: 'Erro ao cadastrar o usuário' });
    });

    
});

//Rotas mongodb


// iniciar servidor
app.listen(port, ()=>{
    console.log('Servidor rodando blz');
});

