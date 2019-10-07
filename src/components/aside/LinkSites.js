import React from 'react'

class LinkSites extends React.Component {
    render() {
        return (
            <div className="card bg-light mt-3 section">
                <div className="card-header">WEBSITE LIÊN KẾT</div>
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
        )
    }
}

export default LinkSites