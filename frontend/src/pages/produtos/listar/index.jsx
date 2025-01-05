export const ListarProdutosPage = () =>{
    return (
        <>
            <h1>Listar Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Produto 1</td>
                        <td>100</td>
                        <td>Descrição do Produto 1</td>
                    </tr>
                    <tr>
                        <td>Produto 2</td>
                        <td>200</td>
                        <td>Descrição do Produto 2</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}