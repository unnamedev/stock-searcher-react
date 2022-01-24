import React, {useContext, useState} from "react"
import {FaSearch} from "react-icons/fa"
import AppContext from "../context/AppContext"

const Search = () => {
    // App context
    const {setQuery} = useContext(AppContext)
    // Store form field value
    const [value, setValue] = useState("")

    /**
     * Form submit handler
     * @param e - event
     */
    const submitHandler = (e) => {
        e.preventDefault()
        // Set query value
        setQuery(value)
        // Form field value reset
        setValue("")
    }

    return <form onSubmit={submitHandler} className="form">
        <input className="form__input"
               type="text"
               placeholder="Search for free photos"
               onChange={(e) => setValue(e.target.value)}
        />
        <button className="form__button" type="submit" aria-label="Search" title="Search">
            <FaSearch size={20} className="form__button-ico"/>
        </button>
    </form>
}

export default Search
