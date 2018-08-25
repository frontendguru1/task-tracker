import React from 'react'
import ReactDOM from 'react-dom'

class Formfield extends React.Component {
    render() {

        return (
            <div className={'field-row'}>
                <label>{this.props.label}</label>
                <input type={this.props.fieldtype} className={'form-control'} name={this.props.name} placeholder={this.props.placeholder} />
            </div>
        )
    }
}

export default Formfield