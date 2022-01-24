import React, {useContext} from "react"
import AppContext from "../context/AppContext"
import Card from "./Card"

const Cards = () => {
    const {images} = useContext(AppContext)
    return images.length !== 0 ?
        <ul className="cards container">
            {images.map((image) => <Card key={image.id} data={image}/>)}
        </ul> : ""
}

export default Cards
