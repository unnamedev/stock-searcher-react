import React from "react"
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import {FaQuestion} from "react-icons/fa"
import {AppProvider} from "./context/AppContext"

const App = () =>
    <AppProvider>
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/about" exact element={<About/>}/>
                <Route path="/*" exact element={<NotFound/>}/>
            </Routes>
            <Link to="/about" className="about__link">
                <FaQuestion size={40} color={"#f6289a"}/>
            </Link>
        </Router>
    </AppProvider>

export default App
