'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// parent component:- TaskList
var TaskList = function (_React$Component) {
    _inherits(TaskList, _React$Component);

    function TaskList(props) {
        _classCallCheck(this, TaskList);

        var _this = _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).call(this, props));

        _this.state = {
            taskListData: [],
            showFormError: false
        };

        _this.handleAddTask = _this.handleAddTask.bind(_this);
        _this.handleRemoveTask = _this.handleRemoveTask.bind(_this);

        return _this;
    }

    _createClass(TaskList, [{
        key: 'handleRemoveTask',
        value: function handleRemoveTask(option) {
            // this.setState((prevstate)=> ({
            //     taskListData: prevstate.taskListData.filter((el)=>{
            //         console.log(el !== option)
            //         return el !== option
            //     })
            // }))

            var array = [].concat(_toConsumableArray(this.state.taskListData));
            var index = array.indexOf(option.target.value);
            array.splice(index, 1);
            this.setState({ taskListData: array });
        }
    }, {
        key: 'handleAddTask',
        value: function handleAddTask(e) {
            e.preventDefault();
            var taskname = e.target.elements.taskName.value.trim();
            var taskdate = e.target.elements.taskDate.value.trim();
            var assignedname = e.target.elements.assignedName.value.trim();
            var formvalues = {};
            formvalues.taskName = taskname;
            formvalues.date = taskdate;
            formvalues.assignedTo = assignedname;

            if (!taskname == '' && !taskdate == '' && !assignedname == '') {
                this.setState(function (prevstate) {
                    return {
                        taskListData: prevstate.taskListData.concat(formvalues),
                        showFormError: false
                    };
                });

                e.target.elements.taskName.value = '';
                e.target.elements.taskDate.value = '';
                e.target.elements.assignedName.value = '';
            } else {
                this.setState(function () {
                    return {
                        showFormError: true
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var formError = this.state.showFormError;
            var showAddTaskMsg = this.state.taskListData;
            var checkTaskLength = showAddTaskMsg.length;

            return React.createElement(
                'div',
                { className: 'tasklist-container' },
                React.createElement(Head, { title: 'Task Tracker', headClass: 'main-head' }),
                React.createElement(
                    'div',
                    { className: 'display-flex' },
                    React.createElement(
                        'div',
                        { className: 'create-task' },
                        React.createElement(Head, { title: 'Create a Task', headClass: 'section-head' }),
                        React.createElement(
                            'div',
                            { className: 'form-container' },
                            React.createElement(
                                'form',
                                { onSubmit: this.handleAddTask },
                                React.createElement(Formfield, { label: 'Task Name', fieldtype: 'text', placeholder: 'Please enter task name', name: 'taskName' }),
                                React.createElement(Formfield, { label: 'Date', fieldtype: 'date', placeholder: 'Please select date', name: 'taskDate' }),
                                React.createElement(Formfield, { label: 'Assigned to', fieldtype: 'text', placeholder: 'Please enter name', name: 'assignedName' }),
                                formError && React.createElement(
                                    'div',
                                    { className: 'form-error' },
                                    'Please fill all the form fields'
                                ),
                                React.createElement(
                                    'button',
                                    { type: 'submit' },
                                    'Submit'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'task-list' },
                        React.createElement(Head, { title: 'Existing Tasks', headClass: 'section-head' }),
                        checkTaskLength == 0 && React.createElement(
                            'div',
                            { className: 'no-task' },
                            'There is no existing task'
                        ),
                        checkTaskLength > 0 && React.createElement(TaskListContainer, { taskListContent: this.state.taskListData, handleRemoveTask: this.handleRemoveTask })
                    )
                )
            );
        }
    }]);

    return TaskList;
}(React.Component);

// Head component


var Head = function (_React$Component2) {
    _inherits(Head, _React$Component2);

    function Head() {
        _classCallCheck(this, Head);

        return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
    }

    _createClass(Head, [{
        key: 'render',
        value: function render() {
            var headClass = this.props.headClass;
            return React.createElement(
                'div',
                { className: headClass },
                this.props.title
            );
        }
    }]);

    return Head;
}(React.Component);

//FormField Component


var Formfield = function (_React$Component3) {
    _inherits(Formfield, _React$Component3);

    function Formfield() {
        _classCallCheck(this, Formfield);

        return _possibleConstructorReturn(this, (Formfield.__proto__ || Object.getPrototypeOf(Formfield)).apply(this, arguments));
    }

    _createClass(Formfield, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { className: 'field-row' },
                React.createElement(
                    'label',
                    null,
                    this.props.label
                ),
                React.createElement('input', { type: this.props.fieldtype, className: 'form-control', name: this.props.name, placeholder: this.props.placeholder })
            );
        }
    }]);

    return Formfield;
}(React.Component);

//TaskList Component


var TaskListContainer = function (_React$Component4) {
    _inherits(TaskListContainer, _React$Component4);

    function TaskListContainer() {
        _classCallCheck(this, TaskListContainer);

        return _possibleConstructorReturn(this, (TaskListContainer.__proto__ || Object.getPrototypeOf(TaskListContainer)).apply(this, arguments));
    }

    _createClass(TaskListContainer, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                { className: 'tasklist-indent' },
                this.props.taskListContent.map(function (data, index) {
                    return React.createElement(TaskListRow, {
                        key: index,
                        taskName: data.taskName,
                        assignedDate: data.date,
                        assignedTo: data.assignedTo,
                        handleRemoveTask: _this5.props.handleRemoveTask
                    });
                })
            );
        }
    }]);

    return TaskListContainer;
}(React.Component);

//TasListRow Component


var TaskListRow = function (_React$Component5) {
    _inherits(TaskListRow, _React$Component5);

    function TaskListRow() {
        _classCallCheck(this, TaskListRow);

        return _possibleConstructorReturn(this, (TaskListRow.__proto__ || Object.getPrototypeOf(TaskListRow)).apply(this, arguments));
    }

    _createClass(TaskListRow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'tasklist-row' },
                React.createElement(
                    'div',
                    { className: 'col' },
                    React.createElement(
                        'div',
                        null,
                        'Task Name'
                    ),
                    this.props.taskName
                ),
                React.createElement(
                    'div',
                    { className: 'col' },
                    React.createElement(
                        'div',
                        null,
                        'Assigned Date'
                    ),
                    this.props.assignedDate
                ),
                React.createElement(
                    'div',
                    { className: 'col' },
                    React.createElement(
                        'div',
                        null,
                        'Assigned to'
                    ),
                    this.props.assignedTo
                ),
                React.createElement(
                    'div',
                    { className: 'remove', onClick: this.props.handleRemoveTask },
                    'Remove'
                )
            );
        }
    }]);

    return TaskListRow;
}(React.Component);

//Init app


var app = document.getElementById('taskTrackerApp');
ReactDOM.render(React.createElement(TaskList, null), app);
