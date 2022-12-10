import express  from "express";
import bodyParser from "body-parser";

const dishRouter = express.Router(); //instância do objeto

dishRouter.route('/') //propriedades da rota, requisições de resposta
.all((req, res, next) => {
    res.status.Code = 200
    res.setHeader = ('Content-Type', 'text/plain');
    next()
}) 
.get((req, res, next) => {
    res.end('Te enviarei todos os pratos!')
})
.post((req, res, next) => {
    res.statusCode = 201;
    res.end('Irei adicionar a refeicao: ' + req.body.name + ' com os detalhes:' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('A operação PUT não é permitida em /dishes');
})
.delete((req, res, next) => {
    res.statusCode = 204;
    console.log('Deletando todas as refeicoes');
    res.end('');
});

dishRouter.route('/:dishId')
.get((req, res, next) => {
    res.end('Vou mandar os detalhes da refeicao ' + req.params.dishId + ' para voce.');
})
.put((req, res, next) => {
    res.write('Atualizando a refeicao ' + req.params.dishId +'\n');
    res.end('Ira atualizar a refeicao ' + req.body.name + ' com os detalhes: ' + req.body.description);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('A operacao POST nao e suportada em /dishes/' + req.params.dishId);
})
.delete((req, res, next) => {
    res.statusCode = 204;
    res.end('');
})

// module.exports = dishRouter;
export default dishRouter;
