const produto = require('./acoes/produto');
const cliente = require('./acoes/cliente');

function router(pedido) {
    console.log(pedido.url)
    if (pedido.url.indexOf('/clientes') >= 0) {
        if (pedido.method === 'GET') {
            return cliente.listar();
        }
        if (pedido.method === 'POST') {
            // let dado = '';
            // let novoCliente;
            // pedido.on('data', parte => {
            //     dado += parte;
            // })
            // pedido.on('end', () => {
            //     novoCliente = JSON.parse(dado)
            // })
            // console.log(novoCliente)
            // return novoCliente.nome;
            return cliente.cadastrar();
        }
        if (pedido.method === 'PUT') {
            return cliente.editar();
        }
        if (pedido.method === 'DELETE') {
            let id = pedido.url.split("/")[2]
            return cliente.excluir(id);
        }
    }

    if (pedido.url === '/produtos') {
        return produto.listar();
    }

    return "Error 404";
}

module.exports = router;