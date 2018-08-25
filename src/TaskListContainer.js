import React from 'react'
import ReactDOM from 'react-dom'
import TaskListRow from './TaskListRow'

class TaskListContainer extends React.Component {
    render() {
        return (
            <div className={'tasklist-indent'}>
                {
                    this.props.taskListContent.map((data, index)=>{
                        return <TaskListRow
                            key={index}
                            taskName={data.taskName}
                            assignedDate={data.date}
                            assignedTo={data.assignedTo}
                            handleRemoveTask={this.props.handleRemoveTask}
                        />
                    })
                }
            </div>
        )
    }
}

export default TaskListContainer
