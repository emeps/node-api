export const Input = ({ type, info }) => {
    if (type === 'text') {
        return (
            <input
                type={type}
                id={info.id}
                name={info.name}
                required
                placeholder={info.placeholder}
                value={info.value}
                onChange={info.onChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        )
    }
    if (type === 'textarea') {
        return (
            <textarea
                id={info.id}
                name={info.name}
                required
                rows={info.rows}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        )
    }
    if (type === 'select') {
        return (
            <select
                name={info.name}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="sim">Sim</option>
                <option value="não">Não</option>
            </select>
        )
    }
}