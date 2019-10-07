import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import '../css/custom-lib.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-dark gradient">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Trang chủ <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuInfo" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Giới thiệu
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuInfo">
                                    <a class="dropdown-item" href="#">Chức năng</a>
                                    <a class="dropdown-item" href="#">Nhiệm vụ</a>
                                    <a class="dropdown-item" href="#">Nhân sự</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuNews" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Thông tin - Thông báo
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuNews">
                                    <a class="dropdown-item" href="#">Thông báo</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuDocument" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tài liệu
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuDocument">
                                    <a class="dropdown-item" href="#">Qui chế- Qui định</a>
                                    <a class="dropdown-item" href="#">Qui trình</a>
                                    <a class="dropdown-item" href="#">Biểu mẫu</a>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Liên hệ <span class="sr-only"></span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar