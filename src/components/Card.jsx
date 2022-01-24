import React from "react"
import {v4 as uuidv4} from "uuid"
import {AnimateSharedLayout, motion} from "framer-motion"
import {FaDownload, FaEye, FaRegThumbsUp, FaRegUser} from "react-icons/fa"

const Card = ({data: {webformatURL, user, views, tags, likes, downloads}}) =>
    <AnimateSharedLayout>
        <motion.li className="cards-item"
                   layout
                   whileHover={{opacity: 1}}
                   initial={{opacity: 0}}
                   animate={{opacity: 1}}
                   transition={{delay: 1}}
        >
            <img className="cards-item__image" src={webformatURL} alt={user}/>
            <div className="cards-item__info">
                <div className="cards-item__info-row">
                    <p><FaRegUser/> {user}</p>
                    <p><FaEye/>: {views}</p>
                    <p><FaRegThumbsUp/> {likes}</p>
                    <p><FaDownload/>: {downloads}</p>
                </div>

                <ul className="cards-item__tags">
                    {tags.split(", ").map((tag) =>
                        <li className="cards-item__tags-item" key={uuidv4()}>{`#${tag}`}</li>
                    )}
                </ul>
            </div>
        </motion.li>
    </AnimateSharedLayout>

export default Card

