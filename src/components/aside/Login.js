import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div className="card bg-light mt-3 section">
                <div className="card-header">ĐĂNG NHẬP</div>
                <div className="card-body section-body">
                    <div className="mt-1">
                        <b className="mb-3">Tên người dùng *</b>
                        <div className="input-group input mt-1">
                            <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        </div>
                        <small style={{ textAlign: "right", fontSize: 12 }}>dùng tài khoản chứng thực</small>
                    </div>
                    <div className="mt-1">
                        <b>Mật khẩu *</b>
                        <div className="input-group input mt-1">
                            <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        </div>
                        <small style={{ textAlign: "right", fontSize: 12 }}>mật khẩu chứng thực</small>
                    </div>
                    <div className="mt-1">
                        <button type="button" class="btn btn-primary gradient">Primary</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login