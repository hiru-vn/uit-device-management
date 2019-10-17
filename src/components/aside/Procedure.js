import React from 'react'

class Procedure extends React.Component {
    render() {
        return (
            <div className="card bg-light mt-3 section">
                <div className="card-header">QUY TRÌNH</div>
                <div className="card-body section-body">
                    <ul className="list-group">
                        <li className="list-group-item"><a href="#">Quy trình mở cửa phòng làm việc</a></li>
                        <li className="list-group-item"><a href="#">Quy trình sửa chữa trang thiết bị Công nghệ thông tin</a></li>
                        <li className="list-group-item"><a href="#">Quy trình bảo trì, thay mới trang thiết bị</a></li>
                        <li className="list-group-item"><a href="#">Quy trình mua sắm mới thiết bị nhỏ lẻ</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Procedure