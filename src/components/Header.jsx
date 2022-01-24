import React, {useContext} from "react"
import Search from "./Search"
import {motion} from "framer-motion"
import AppContext from "../context/AppContext"

const Header = () => {
    const {images} = useContext(AppContext)
    const randomImage = images.length !== 0 ? images[Math.floor(Math.random() * 20)].webformatURL : ""
    
    return <motion.header
        className="header"
        style={{backgroundImage: `url(${randomImage})`}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1}}
    >
        <div className="container">
            <h1 className="header__title">
                The best free stock photos, royalty free images & videos shared by
                creators.
            </h1>

            <Search/>
        </div>
    </motion.header>
}

export default Header
