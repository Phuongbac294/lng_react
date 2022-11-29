import Context from "./context";

function Provider({children}) {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default Provider;