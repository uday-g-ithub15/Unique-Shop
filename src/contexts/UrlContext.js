import React, { createContext } from 'react'

export const Context = createContext()

const UrlContext = ({ children }) => {
    const url = 'http://localhost:5000'
    return (
        <Context.Provider value={{ url }}>{children}</Context.Provider>
    )
}

export default UrlContext