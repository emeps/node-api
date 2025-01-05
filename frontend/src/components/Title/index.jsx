export const Title = ({ className, children }) => {
    return (
        <h1 className={className ? className : "text-lg font-semibold text-gray-800"}>
            {children}
        </h1>
    )
}