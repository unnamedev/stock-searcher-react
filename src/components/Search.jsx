import React, {useState} from "react"
import {FaSearch} from "react-icons/fa"

const Search = ({setTerm}) => {
    const [value, setValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setTerm(value)
    }

    return <form onSubmit={submitHandler} className="form">
        <input className="form__input" type="text" onChange={(e) => setValue(e.target.value)}
               placeholder="Search for free photos"/>
        <button className="form__button" type="submit" aria-label="Search" title="Search">
            <FaSearch size={20} className="form__button-ico"/>
        </button>
    </form>
}

export default Search
