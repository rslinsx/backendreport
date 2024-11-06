const mongoose = require('mongoose');
require('dotenv').config();

//Conexão com mongodb
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Conectou mongodb!!!!!!!!! hehe');
}).catch((err)=>{
    console.log('nao deu certo', err);
});


////////////////////////////////////////////SCHEMAS ///////////////////////////////////////////////

//schema de usuarios
const userSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String,
    senha: String,
    chave: Boolean
});


//////////////////////////////////////////MODELS/////////////////////////////////////////////////
const NewUser = mongoose.model('User', userSchema);


//criacao de users
const novoUsuario = new NewUser({
    email: 'rafael@gmail.com',
    senha: '1234',
    firstname: "Rafael",
    lastname: "Lins",
    chave: true
});




 // Export
module.exports = NewUser;





