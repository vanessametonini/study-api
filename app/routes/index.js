const api = require('../api')

module.exports = function (app) {

  app.route('/v2/dados')
    .post(api.adiciona)
    .get(api.lista)

  app.route('/v2/dados/:itemId')
    .delete(api.remove)
    .get(api.busca)
    .put(api.atualiza)

}