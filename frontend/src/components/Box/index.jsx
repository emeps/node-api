export const Box = ({ className, children }) => {
    return(
        <div className={className ? className: "mb-4"}>
            {children}
        </div>
    )
}