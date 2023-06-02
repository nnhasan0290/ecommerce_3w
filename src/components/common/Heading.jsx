const Heading = ({children, sm}) => {
    return(
        <h2 className={`heading ${sm && "sm"}`}>{children}</h2>
    )
}

export default Heading;