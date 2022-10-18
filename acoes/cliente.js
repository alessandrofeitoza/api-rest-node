function listar() {
    return [
        {
            id: 1,
            nome: "Chiquim"
        },
        {
            id: 2,
            nome: "Maria"
        }
    ];
}

function cadastrar () {
    return "Cadastrar Cliente";
}

function editar () {
    return "Editar Cliente";
}

function excluir () {
    return "Excluir Cliente";
}

module.exports = {
    // listar: listar,
    listar, 
    cadastrar,
    excluir,
    editar,
};