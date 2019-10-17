import React from 'react'
import '../css/header.css'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Link to="/"><img src={require('../assets/image/banner.png')} alt="banner"></img></Link>
                    <form className="form-inline my-lg-0 left search">
                        <input className="form-control mr-sm-2" type="search" placeholder="Từ khóa" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"> Tìm kiếm</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Header