const http = require('http');

const router = require('./router');

const host = 'localhost';
const port = '8000';

//funcao que vai ser executada sempre que houver 
//alguma requisicao por parte do cliente
function execucao (pedido, resposta) {
    //definindo o tipo de conteudo da resposta, para json
    resposta.setHeader('Content-Type', 'application/json');

    //pedindo ao router qual o conteudo da url acessada
    let conteudo = router(pedido.url);

    //enviando o conteudo que tinha no router como resposta pro cliente
    resposta.end(JSON.stringify(conteudo));
}

//criando o servidor e definindo a funcao que ficará 
//sendo executada
const server = http.createServer(execucao);

//subindo o servidor pra ficar escutando as requisições
server.listen(port, host, () => {
    console.log(`Servidor rodando no endereco http://${host}:${port}`)
});
