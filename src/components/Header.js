import React from 'react'
import '../css/header.css'
import { banner } from '../assets/image/banner.png'

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <img src="https://qttb.uit.edu.vn/sites/qttb/files/banner.png" alt="banner"></img>
                    <form className="form-inline my-2 my-lg-0 ml-5 left">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Từ khóa tìm kiếm</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Header