var  api = require('../api')
    ,path = require('path')

module.exports = function(app) {

    app.route('/v1/dados')
        .post(api.adiciona)
        .get(api.lista)

    app.route('/v1/dados/:itemId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza)

}