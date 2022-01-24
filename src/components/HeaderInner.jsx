import React from "react"
import {Link} from "react-router-dom"
import {FaNeos} from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

const HeaderInner = () =>
    <header className="header-inner">
        <Link className="header-inner__logo" to="/">
            <FaNeos className="header-inner__ico" size={20}/>
            Stock
        </Link>
        <ThemeToggle/>
    </header>

export default HeaderInner
