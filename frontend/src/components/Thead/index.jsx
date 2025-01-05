export const Thead = ({ columns }) => {
    return (
        <thead>
            <tr className="bg-gray-200 text-gray-700">
                {columns.map((column, index) => (
                    <th key={index} className="p-3 text-left border-l">{column}</th>
                ))}
            </tr>
        </thead>
    )
}