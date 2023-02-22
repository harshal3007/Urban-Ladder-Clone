import React ,{useState} from "react";
import { FaSearchLocation, FaShoppingCart, FaUser, FaRegHeart } from "react-icons/fa"
import "./NavBar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import img1 from "../images/Untitled design (1).png"
import {Link} from "react-router-dom"

export function Navbar() {
      const [showIcons, setShowIcons] = useState(false);
      const handlehamburger = ()=> setShowIcons(!showIcons)
    return (
        <>
            <nav className="nav">
                <Link to="/" className="logofornav">
             
                    <img src={img1} alt="Logo" />
                    <h1>FurnitureFrenzy</h1>
                </Link>
                
                <div className="search">
                    <input type="text" className="search__input" placeholder="Type your text"/>
                        <button className="search__button">
                            <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                        </button>
                    
                </div>
                <div className="iconfornav">
                    <ul className="ulofnavicon">
                        
                        <li><Link to="/"><FaUser className="iconcolor" /></Link></li>
                        <li><Link to="/"><FaRegHeart className="iconcolor" /></Link></li>
                        <li><Link to="/"><FaSearchLocation className="iconcolor" /></Link></li>
                        <li><Link to="/"><FaShoppingCart className="iconcolor" /></Link></li>
                    </ul>
                   
                    <div className="hamburger-menu" onClick={handlehamburger}>
                    <a href="./" onClick={() => setShowIcons(!showIcons)}>
              <GiHamburgerMenu />
            </a>
                    </div>
                </div>
            </nav>

        </>
    )
}