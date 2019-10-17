import React from 'react'

class ProcedureItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="procedure-item">
                <p className="item-title">{this.props.item.title}</p>
                <p className="item-datetime">{this.props.item.date} - {this.props.item.time}</p>
                <p className="item-content">
                    {this.props.item.description}
                    {this.props.item.time}{this.props.item.note}
                    {this.props.item.steps.map(item => (item.content))}
                </p>
            </div>
        )
    }
}

export default ProcedureItem 