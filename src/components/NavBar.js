import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import '../css/custom-lib.css'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark gradient">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to="/"><a class="nav-link nav-link-white" href="#">Trang chủ <span class="sr-only">(current)</span></a></Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link nav-link-white dropdown-toggle" href="#" id="navbarDropdownMenuInfo" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Giới thiệu
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuInfo">
                                    <Link to="chuc-nang"><a class="dropdown-item" href="#">Chức năng</a></Link>
                                    <Link to="nhiem-vu"><a class="dropdown-item" href="#">Nhiệm vụ</a></Link>
                                    <Link to="nhan-su"><a class="dropdown-item" href="#">Nhân sự</a></Link>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link nav-link-white dropdown-toggle" href="#" id="navbarDropdownMenuNews" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Thông tin - Thông báo
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuNews">
                                    <Link><a class="dropdown-item" href="#">Thông báo</a></Link>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link nav-link-white dropdown-toggle" href="#" id="navbarDropdownMenuDocument" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tài liệu
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuDocument">
                                    <Link to="quy-che-quy-dinh"><a class="dropdown-item" href="#">Qui chế - Qui định</a></Link>
                                    <Link to="quy-trinh"><a class="dropdown-item" href="#">Qui trình</a></Link>
                                    <Link to="bieu-mau"><a class="dropdown-item" href="#">Biểu mẫu</a></Link>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <Link to='/lien-he'><a class="nav-link nav-link-white" href="#">Liên hệ <span class="sr-only"></span></a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar