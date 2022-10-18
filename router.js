
const produto = require('./acoes/produto'); 
const cliente = require('./acoes/cliente');

function router(url) {
    if (url === '/clientes') {
        return cliente.listar();
    }

    if (url === '/produtos') {
        return produto.listar();
    }

    // resposta.writeHead(404);


    return "Error 404";
}

module.exports = router;