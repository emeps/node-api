export const Button = ({ type, text, onClick, className }) => {
    return (
        <button
            type={type}
            className= {className ? className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"}
            onClick={onClick}
        >
            {text}
        </button>
    )
}