import React, { createContext } from 'react'

export const Context = createContext()

const UrlContext = ({ children }) => {
    const url = 'https://unique-shop-server.onrender.com'
    return (
        <Context.Provider value={{ url }}>{children}</Context.Provider>
    )
}

export default UrlContext