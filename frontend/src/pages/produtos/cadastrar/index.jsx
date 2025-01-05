import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import axios from 'axios';
import { formatCurrency } from '../../../utils/formattedValueCurrency';
import { Label } from '../../../components/Label';
import { MAX_VALUE } from '../../../utils/constants';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Box } from '../../../components/Box';
import { Form } from '../../../components/Form';
import { Title } from '../../../components/Title';

export const CadastrarProdutoPage = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate()

  const handleValueChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue.replace(/\D/g, '')) || 0;
    if (numericValue > MAX_VALUE * 100) {
      setValue(formatCurrency(String(MAX_VALUE * 100)));
      return;
    }
    setValue(formatCurrency(inputValue));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      nome: formData.get('nome'),
      descricao: formData.get('descricao'),
      preco: value.replace(/[^\d,]/g, '').replace(',', '.'),
      status: formData.get('status') === 'sim',
    };

    try {
      const result = await axios.post('http://localhost:3001/produto/add', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result.status === 200) {
        alert('Produto cadastrado com sucesso!');
        navigate('/produto/listar');
      } else {
        alert('Erro ao cadastrar o produto. Tente novamente.');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Box className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <Title className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Cadastrar Produto
        </Title>
        <Form onSubmit={handleSubmit}>
          
          <Box>
            <Label htmlFor="nome">Nome do Produto</Label>
            <Input type="text" info={{ id: 'nome', name: 'nome' }} />
          </Box>

          <Box>
            <Label htmlFor="descricao">Descrição do Produto</Label>
            <Input type="textarea" info={{ id: 'descricao', name: 'descricao', rows: 4 }} />
          </Box>

          <Box>
            <Label htmlFor="preco">Valor do Produto</Label>
            <Input type="text" info={{ id: 'preco', name: 'preco', placeholder: 'R$ 0,00', value: value, onChange: handleValueChange }} />
            <p className="text-sm text-gray-500 mt-1">
              O valor máximo permitido é R$ 100.000.000,00.
            </p>
          </Box>

          <Box>
            <Label htmlFor="status">Disponível para venda</Label>
            <Input type="select" info={{ name: 'status' }} />
          </Box>

          <Box className="text-center">
            <Button type="submit" text={"Cadastrar Produto"} />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};
