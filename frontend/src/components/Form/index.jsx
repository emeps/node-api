export const Form = ({ onSubmit, children, className }) => {
    return (
        <form onSubmit={onSubmit} className={className? className: ""}>
            {children}
        </form>
    )
}