import React from 'react'

class Forms extends React.Component {
    render() {
        return (
            <div className="card bg-light mt-3 section">
                <div className="card-header">CÁC BIỂU MẪU</div>
                <div className="card-body section-body">
                    <ul className="list-group">
                        <li className="list-group-item"><a href="#">Giấy đề nghị</a></li>
                        <li className="list-group-item"><a href="#">Giấy báo hỏng</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Forms