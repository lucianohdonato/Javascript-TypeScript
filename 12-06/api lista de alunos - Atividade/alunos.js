var express = require('express')
var cors = require('cors')
var app = express()


app.use(cors())

var dataJson = [{
  "id": 1,
  "Nome": "Lucas",
  "Sobrenome": "Capelotto",
  "Idade": 26,
  "Nota": 9,
  "Situacao": "Aprovado"
},
{
  "id": 3,
  "Nome": "Qualquer",
  "Sobrenome": "Pessoa",
  "Idade": 99,
  "Nota": 1,
  "Situacao": "Reprovado"
},
{
  "id": 2,
  "Nome": "Luciano",
  "Sobrenome": "Donato",
  "Idade": 24,
  "Nota": 7,
  "Situacao": "Aprovado"
}]

app.get('/alunos/notas/matematica', function (req, res) {
  res.json(dataJson)
});

app.get('/alunos/notas/matematica/:id', function (req, res) {
  for (let index = 0; index < dataJson.length; index++) {
    const element = dataJson[index];
    if (element.id == req.params.id) {
      res.json(element)
    }
  }
});

app.get('/alunos/notas/matematica/nome/:nome', function (req, res) {
  dataJson.forEach(element => {
    if (element.Nome == req.params.nome) {
      res.json(element)
    }
  });
});

app.listen(3000, function () {
  console.log('Aplicação utilizando a porta 3000');
});
