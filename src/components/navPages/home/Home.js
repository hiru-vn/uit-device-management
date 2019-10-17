import React from 'react'
import '../../../css/home-page.css'
import Procedure from '../../aside/Procedure';

class Home extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="homeNews">
                    <div className="card bg-light mt-3 section">
                        <div className="card-header">THÔNG BÁO CHUNG</div>
                        <div className="card-body section-body">
                            <ul className="list-group">
                                <li className="list-group-item"><a href="#">Website Trường</a></li>
                                <li className="list-group-item"><a href="#">Phòng Đào tạo Đại học</a></li>
                                <li className="list-group-item"><a href="#">Phòng Đào tạo Sau đại học</a></li>
                                <li className="list-group-item"><a href="#">Phòng công tác sinh viên</a></li>
                                <li className="list-group-item"><a href="#">Phòng Dữ liệu và CNTT</a></li>
                                <li className="list-group-item"><a href="#">Webmail</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <Procedure />
                </div>
            </div>
        )
    }
}

export default Home