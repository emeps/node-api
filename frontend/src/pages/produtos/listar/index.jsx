import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navbar } from '../../../components/Navbar';
import { BoxTable } from '../../../components/BoxTable';
import { Box } from '../../../components/Box';

export const ListarProdutosPage = () => {
    
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        await axios.get('http://localhost:3001/produtos/list')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            }
            ).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <Box className="min-h-screen bg-gray-100">
            <Navbar />
            <BoxTable products={products} />
        </Box>
    )
}