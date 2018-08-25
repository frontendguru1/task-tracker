import React from 'react'
import ReactDOM from 'react-dom'

class Head extends React.Component {
    render() {
        const headClass = this.props.headClass
        return (
            <div className={headClass}>
                {this.props.title}
            </div>
        )
    }
}

export default Head