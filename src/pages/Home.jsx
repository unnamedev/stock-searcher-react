import React, {useEffect, useState} from "react"
import Card from "../components/Card"
import Search from "../components/Search"
import {AnimateSharedLayout} from "framer-motion"

const Home = () => {
    const [images, setImages] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}&image_type=photo`)
            .then(response => response.json())
            .then(({hits}) => {
                setImages(hits)
            })
            .catch(error => console.log(error))
    }, [query])

    return <>
        <header className="header" style={{
            backgroundImage: `url(${images.length !== 0 ? images[Math.floor(Math.random() * 20)].webformatURL : ""})`
        }}>
            <div className="container">
                <h1 className="header__title">The best free stock photos, royalty free images & videos shared by
                    creators.</h1>
                <Search setTerm={(text) => setQuery(text)}/>
            </div>
        </header>

        <AnimateSharedLayout>
            <ul className="cards container">
                {images.length !== 0 && images.map((image) => <Card key={image.id} data={image}/>)}
            </ul>
        </AnimateSharedLayout>
    </>
}

export default Home
