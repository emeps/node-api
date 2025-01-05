import { openDb } from "../database/config.js";
export  async function createTable() {
    openDb().then(async db => {
        db.exec(`
            create table if not exists produtos ( 
                id integer primary key, 
                nome varchar(100), 
                descricao text,
                preco float,
                status tinyint 
            ) `)
    }).catch(err => {
        console.log(err);
    });
}

export async function listProdutos(){
    try{  
        const db = await openDb();
        const produtos = await db.all('select * from produtos');
        return produtos;

    }catch(err){
        console.log(err);
    }
}

export async function addProduto(produto){
    try{  
        const db = await openDb();
        await db.run(
            'insert into produtos (nome, descricao, preco, status) values (?,?,?,?)', 
            produto.nome, produto.descricao, produto.preco, produto.status
        );
        return true;

    }catch(err){
        console.log(err);
        return false;
    }
}