class TaskList extends React.Component {


    render() {
        return (
            <div className={'tasklist-container'}>

                <div className={'main-head'}>
                    Task Tracker
                </div>

                <div className={'display-flex'}>
                
                    <div className={'create-task'}>
                        <div className={'section-head'}>Create a Task</div>

                        <div className={'form-container'}>
                            <form>
                                <div className={'field-row'}>
                                    <label>Task Name</label>
                                    <input type={'text'} className={'form-control'} placeholder={'Today Task'} />
                                </div>

                                <div className={'field-row'}>
                                    <label>Date</label>
                                    <input type={'date'} placeholder={'Select Date'} className={'form-control'} />
                                </div>

                                <div className={'field-row'}>
                                    <label>Assigned to</label>
                                    <input type={'text'} placeholder={'Please enter name'} className={'form-control'} />
                                </div>

                                <button type={'submit'}>Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className={'task-list'}>
                        <div className={'section-head'}>Existing Tasks</div>

                        <div className={'tasklist-indent'}>
                            <div className={'tasklist-row'}>
                                <div classname={'col'}>
                                    <span>Task Name</span>
                                        Test Task
                                </div>

                                <div className={'col'}>
                                    <span>Assigned Date</span>
                                    20/05/2018
                                </div>

                                <div className={'col'}>
                                    <span>Assigned to</span>
                                    Michael Abitbol
                                </div>

                                <div className={'remove'}>
                                    x
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                


            </div>
        )
    }


}

const app = document.getElementById('app');
ReactDOM.render(
    <TaskList />,
    app
);