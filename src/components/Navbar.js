import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar-parent">
            {/* <Link className="navbar" to="/">bio</Link>
            <Link className="navbar" to="/resume">resume</Link>
            <Link className="navbar" to="/portfolio">portfolio</Link> */}
            <a className="navbar" href='https://www.linkedin.com/in/samanthajavery/' target="_blank">contact</a>
        </div>
    );
  }

  export default Navbar;
