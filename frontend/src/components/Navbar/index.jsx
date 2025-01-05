import { useNavigate } from 'react-router';
import { Box } from '../Box';
import { Button } from '../Button';
import { Title } from '../Title';
export const Navbar = () => {
    const navigate = useNavigate()  
    return (
        <nav className="bg-white shadow p-4">
            <Box className="flex justify-between items-center">
                <Title>Produtos</Title>
                <Button
                    onClick={() => navigate('/produto/cadastrar')}
                    text={'Cadastrar Produto'}
                />
            </Box>
        </nav>
    )
};