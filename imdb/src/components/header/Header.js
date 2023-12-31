import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="header icon" /></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
                <Link to="/login" style={{ textDecoration: "none" }}><span>login</span></Link>
                <Link to="/register" style={{ textDecoration: "none" }}><span>Signup</span></Link>
                <Link to="/"><span><i className="user__avatar fas fa-user-circle"></i></span></Link>
            </div>
        </div>
    );
};

export default Header;