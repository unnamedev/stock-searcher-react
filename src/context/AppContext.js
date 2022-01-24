import {createContext, useEffect, useState} from "react"

const AppContext = createContext()

export const AppProvider = ({children}) => {
    // Store images
    const [images, setImages] = useState([])
    // Store search query
    const [query, setQuery] = useState('')

    useEffect(() => {
        fetchStocks()
    }, [query])

    /**
     * Fetch data
     * @returns {Promise<void>}
     */
    const fetchStocks = async () => {
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}&image_type=photo`)
        const data = await response.json()
        setImages(data.hits)
    }

    return <AppContext.Provider value={{images, setQuery}}>{children}</AppContext.Provider>
}

export default AppContext