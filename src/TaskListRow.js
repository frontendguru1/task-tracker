import React from 'react'
import ReactDOM from 'react-dom'

class TaskListRow extends React.Component {
    render() {
        return (
            <div className={'tasklist-row'}>
                <div className={'col'}>
                    <div>Task Name</div>
                        {this.props.taskName}
                </div>

                <div className={'col'}>
                    <div>Assigned Date</div>
                    {this.props.assignedDate}
                </div>

                <div className={'col'}>
                    <div>Assigned to</div>
                    {this.props.assignedTo}
                </div>

                <div className={'remove'} onClick={()=>this.props.handleRemoveTask(this.props.taskName)}>
                    Remove
                </div>
            </div>
        )
    }
}

export default TaskListRow
