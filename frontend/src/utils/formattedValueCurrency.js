export const formattedValueCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value)
}

export const formatCurrency = (value) => {
  const numericValue = value.replace(/\D/g, '');
  const formattedValue = formattedValueCurrency(parseFloat(numericValue) / 100)
  return formattedValue;
};
