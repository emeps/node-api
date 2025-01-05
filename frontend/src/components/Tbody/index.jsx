import { formattedValueCurrency } from "../../utils/formattedValueCurrency"

export const Tbody = ({ products }) => {
    return (
        <tbody>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <tr
                        key={index}
                        className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                        <td className="p-3">{product.nome}</td>
                        <td className="p-3 border-l pr-4">
                            {formattedValueCurrency(product.preco)}
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="2" className="p-3 text-center text-gray-500">
                        Nenhum produto encontrado.
                    </td>
                </tr>
            )}
        </tbody>
    )
}