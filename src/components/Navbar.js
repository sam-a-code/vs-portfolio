import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
        <div className="navbar-parent">
            <Link className="navbar" to="/">home</Link>
            <Link className="navbar" to="/resume">resume</Link>
            <Link className="navbar" to="/portfolio">portfolio</Link>
            <a className="navbar" href='https://www.linkedin.com/in/victorialynnmoreno/' target="_blank">contact</a>
        </div>
        </header>
    );
  }

  export default Navbar;
