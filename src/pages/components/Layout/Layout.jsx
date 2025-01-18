export const Layout = ({ children, className, ...restProps }) => (
    <div className={className} {...restProps}>
        {children}
    </div>
)
