import express from 'express';
import {createTable, addProduto, listProdutos} from './controller/produtosController.js';

const app = express();
createTable();

app.use(express.json());
app.get('/produtos/list', async (req, res) => {
    console.log('Listando produtos')
    const produtos = await listProdutos();
    res.json(produtos).status(200);
});

app.post('/produto/add', async (req, res) => { 
    console.log('Salvando produto')
    const produto = req.body;
    const status = await addProduto(produto);
    if(!status){
        return res.json({ message: 'Erro ao adicionar produto!' }).status(400);
    }
    res.json({ message: 'Produto adicionado com sucesso!', redirectUrl: '/produtos/list' }).status(201);
});

app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});