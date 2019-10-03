import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/">
                        Home&nbsp;<i class="fas fa-home"></i>
                        <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/news">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/contact" tabindex="-1" aria-disabled="true">
                        Contact us
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 ml-5">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default NavBar