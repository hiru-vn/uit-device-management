import React from 'react'
import {procedureData} from '../../../fakeData/procedureData'
import ProcedureItem from './ProcedureItems';

class Procedure extends React.Component {
    render() {
        return (
            <div className="body-navpages-container">
                <h5>Quy trình</h5>
                <div>
                    {
                        procedureData.map(item => (
                            <ProcedureItem item = {item}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Procedure 