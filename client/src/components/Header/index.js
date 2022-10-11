import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

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
               
                {/* Login and Signup should only be displayed when not logged in*/}

                {Auth.loggedIn() ? (
                    <>
                        <Link to="/tournament" className="navLink">
                            HOST<div className="lineHighlight" />
                        </Link>
                        <Link to="/" onClick={logout} className="navLink">
                            LOGOUT<div className="lineHighlight" />
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="navLink">
                            SIGN IN<div className="lineHighlight" />
                        </Link>
                        <Link to="/signup" className="navLink">
                            SIGN UP<div className="lineHighlight" />
                        </Link>
                    </>
                )


                }

            </nav>
        </header>
    );
}

export default Header;