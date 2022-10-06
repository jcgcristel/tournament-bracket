import { Link } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {  
    return (
        <header className="center">
            <Link to="/">
                <div className="title">
                    <img id="logo" src="logo-white.png"></img>
                    <div className="title-text">
                        <h1>TOURNAMENT<br />BRACKET</h1>
                    </div>
                </div>
            </Link>
            <nav className="center">
                {/* Dashboard should only be displayed when logged in */}
                <a href="/">DASHBOARD<div /></a>
                {/* Login and Signup should only be displayed when not logged in*/}
                <a href="/">LOGIN<div /></a>
                <a href="/">SIGNUP<div /></a>
                {/* Logout should only be displayed when logged in */}
                <a href="/">LOGOUT<div /></a>
            </nav>
            {/* <div className="menu">
                <button onClick={openMenu}>Menu</button>
            </div> */}
        </header>
    );
}

export default Header;