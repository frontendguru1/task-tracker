'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskList = function (_React$Component) {
    _inherits(TaskList, _React$Component);

    function TaskList() {
        _classCallCheck(this, TaskList);

        return _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).apply(this, arguments));
    }

    _createClass(TaskList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'tasklist-container' },
                React.createElement(
                    'div',
                    { className: 'main-head' },
                    'Task Tracker'
                ),
                React.createElement(
                    'div',
                    { className: 'display-flex' },
                    React.createElement(
                        'div',
                        { className: 'create-task' },
                        React.createElement(
                            'div',
                            { className: 'section-head' },
                            'Create a Task'
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-container' },
                            React.createElement(
                                'form',
                                null,
                                React.createElement(
                                    'div',
                                    { className: 'field-row' },
                                    React.createElement(
                                        'label',
                                        null,
                                        'Task Name'
                                    ),
                                    React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Today Task' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'field-row' },
                                    React.createElement(
                                        'label',
                                        null,
                                        'Date'
                                    ),
                                    React.createElement('input', { type: 'date', placeholder: 'Select Date', className: 'form-control' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'field-row' },
                                    React.createElement(
                                        'label',
                                        null,
                                        'Assigned to'
                                    ),
                                    React.createElement('input', { type: 'text', placeholder: 'Please enter name', className: 'form-control' })
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
                        React.createElement(
                            'div',
                            { className: 'section-head' },
                            'Existing Tasks'
                        ),
                        React.createElement(
                            'div',
                            { className: 'tasklist-indent' },
                            React.createElement(
                                'div',
                                { className: 'tasklist-row' },
                                React.createElement(
                                    'div',
                                    { classname: 'col' },
                                    React.createElement(
                                        'span',
                                        null,
                                        'Task Name'
                                    ),
                                    'Test Task'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col' },
                                    React.createElement(
                                        'span',
                                        null,
                                        'Assigned Date'
                                    ),
                                    '20/05/2018'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col' },
                                    React.createElement(
                                        'span',
                                        null,
                                        'Assigned to'
                                    ),
                                    'Michael Abitbol'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'remove' },
                                    'x'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TaskList;
}(React.Component);

var app = document.getElementById('app');
ReactDOM.render(React.createElement(TaskList, null), app);
