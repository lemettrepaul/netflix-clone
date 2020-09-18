import React, {useEffect, useState} from 'react';
import "./Nav.css";

const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/1200px-Logo_Netflix.png"
                alt="Netflix logo"
                className="nav__logo"/>
            <img
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix avatar"
                className="nav__avatar"/>
        </div>
    );
};

export default Nav;
