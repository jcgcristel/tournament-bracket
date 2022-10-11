import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {  
    return (
        <header className="center-vertical">
            <Link to="/">
                <div className="title">
                    <img id="logo" src="logo-white.png"></img>
                    <div className="title-text">
                        <h1>TOURNAMENT<br />BRACKET</h1>
                    </div>
                </div>
            </Link>
            <nav className="center-vertical">
                {/* Dashboard should only be displayed when logged in */}
                <Link to="/tournament">
                    <a href="/" className="navLink">HOST</a><div className="lineHighlight" />
                </Link>
                {/* Login and Signup should only be displayed when not logged in*/}
                <Link to="/login">
                    <a href="/" className="navLink">SIGN IN</a><div className="lineHighlight" />
                </Link>
                <Link to="/signup">
                    <a href="/" className="navLink">SIGN UP</a>
                    <div className="lineHighlight" />
                </Link>
                {/* Logout should only be displayed when logged in */}
                <Link to="/">
                    <a href="/" className="navLink">LOGOUT</a><div className="lineHighlight" />
                </Link>
            </nav>
            {/* <div className="menu">
                <button onClick={openMenu}>Menu</button>
            </div> */}
        </header>
    );
}

export default Header;