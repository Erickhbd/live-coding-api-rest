import express  from "express";
import bodyParser from "body-parser";

const promoRouter = express.Router(); //instância do objeto

promoRouter.route('/') //propriedades da rota, requisições de resposta
.all((req, res, next) => {
    res.status.Code = 200
    res.setHeader = ('Content-Type', 'text/plain');
    next()
}) 
.get((req, res, next) => {
    res.end('Te enviarei todas as promocoes!')
})
.post((req, res, next) => {
    res.statusCode = 201;
    res.end('Irei adicionar a promocao: ' + req.body.name + ' com os detalhes:' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('A operação PUT não é permitida em /promos');
})
.delete((req, res, next) => {
    res.statusCode = 204;
    console.log('Deletando todas as promocoes');
    res.end('');
});

promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end('Vou mandar os detalhes da promocao ' + req.params.promoId + ' para voce.');
})
.put((req, res, next) => {
    res.write('Atualizando a promocao ' + req.params.promoId +'\n');
    res.end('Ira atualizar a promocao ' + req.body.name + ' com os detalhes: ' + req.body.description);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('A operacao POST nao e suportada em /promo/' + req.params.promoId);
})
.delete((req, res, next) => {
    res.statusCode = 204;
    res.end('');
})

// module.exports = promoRouter;
export default promoRouter;