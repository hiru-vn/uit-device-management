import React from 'react'
import Login from './Login'
import Forms from './Forms'
import LinkSites from './LinkSites'
import '../../css/aside.css'

class Aside extends React.Component {
    render() {
        return (
            <div>
                <Login/>
                <Forms/>
                <LinkSites/>
            </div>
        )
    }
}

export default Aside