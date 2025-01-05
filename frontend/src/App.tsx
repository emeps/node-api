import {  Routes,  Route, Navigate} from 'react-router'
import {CadastrarProdutoPage} from './pages/produtos/cadastrar/index'
import {ListarProdutosPage} from './pages/produtos/listar/index'
function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Navigate to="/produto/listar" />} />
          <Route path="/produto/listar" element={<ListarProdutosPage />} />
          <Route path="/produto/cadastrar" element={<CadastrarProdutoPage />} />
      </Routes>
    </>
  )
}

export default App
