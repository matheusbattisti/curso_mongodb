// 1 - conexao
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Estamos conectados!")
});

// 2 - Criando um Schema

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number
})

// 3 - Criando um model

const Pessoa = mongoose.model("Pessoa", pessoaSchema)

const matheus = new Pessoa({
    nome: "Matheus",
    idade: 30
})

console.log(matheus.nome)
console.log(matheus.idade)

// 4 - Salvar dados

// matheus.save(function(err) {
//     if(err) {
//         console.log(err)
//     }
// })

// 5 - encontrar dados

Pessoa.findOne({ nome: 'Matheus' }, function(err, pessoa) {
    console.log(pessoa)
})

// 6 - insertmany

// Pessoa.insertMany([
//     {nome: "Pedro", idade: 40},
//     {nome: "Maria", idade: 25},
//     {nome: "José", idade: 23}
// ])


async function getPessoas() {
    const pessoas = await Pessoa.find({}).exec()
    console.log(pessoas)
}

getPessoas()

// 7 - Deletar

getPessoa("José")

Pessoa.deleteOne({ nome: "José"}).exec()

async function getPessoa(nome) {
    const pessoa = await Pessoa.find({nome: nome}).exec()
    if(pessoa.length == 0) {
        console.log("Esta pessoa não existe")
    } else {
        console.log(pessoa)
    }
}

getPessoa("José")

// 8 - atualizacao

Pessoa.updateOne({ nome: "Maria" }, { idade: 66}).exec()

getPessoa("Maria")

// 9 - where

async function getPessoaNomeIdade(nome, idade) {
    const pessoa = await Pessoa
    .where('idade').gte(idade)
    .where('nome', nome)
    .exec()
  
    if(pessoa.length == 0) {
        console.log("Esta pessoa não existe")
    } else {
        console.log(pessoa)
    }
}

getPessoaNomeIdade("Matheus", 30)

