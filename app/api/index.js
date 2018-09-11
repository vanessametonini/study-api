const db = require('../../config/database')
    , api = {}

api.adiciona = function (req, res) {
  const item = req.body
  delete item._id
  db.insert(
    item
    , function (erro, newDoc) {
      if (erro) return console.log(erro)
      console.log(`Adicionado com sucesso: ${newDoc._id}`)
      res.json(newDoc._id)
    }
  )
}

api.busca = function (req, res) {
  db.findOne(
    { _id: req.params.itemId }
    , function (erro, doc) {
      if (erro) return console.log(erro)
      res.json(doc)
    })
}

api.atualiza = function (req, res) {
  db.update(
    { _id: req.params.itemId }
    , req.body
    , function (erro, numReplaced) {
      if (erro) return console.log(erro)
      if (numReplaced) res.status(200).end()
      res.status(500).end()
      console.log(`Atualizado com sucesso: ${req.body._id}`)
      res.status(200).end()
    })
}

api.lista = function (req, res) {
  db.find({})
    .sort({ titulo: 1 })
    .exec(function (erro, doc) {
      if (erro) return console.log(erro)
      res.json(doc)
    })
}

api.remove = function (req, res) {

  db.remove(
    { _id: req.params.itemId }
    , {}
    , function (erro, numRemoved) {
      if (erro) return console.log(erro)
      console.log('Removido com sucesso')
      if (numRemoved) res.status(200).end()
      res.status(500).end()
    }
  )
}

module.exports = api