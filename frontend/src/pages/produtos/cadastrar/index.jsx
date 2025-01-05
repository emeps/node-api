export const  CadastrarProdutoPage = () =>{
    return (
        <>
            <h1>Cadastrar Produto</h1>
            <form>
                <div>
                    <label>Nome</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Preço</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea></textarea>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </>
    )
}