define([
	'tarmac/Controller',
	'storage/TodoStorage',
	'views/CreateTodoView',
	'views/TodoListView'
], function (Controller, TodoStorage, CreateTodoView, TodoListView) {
	'use strict';

	/**
	 * Base controller for the application. Lists all todo items. Contains
	 * multiple actions to route in different ways.
	 *
	 * @class
	 * @extends Controller
	 */
	function TodoListController() {
		Controller.call(this);
		this.storage = new TodoStorage();
		this.storage.addListener('change', this._handleStorageChange.bind(this));
		this.addListener('executed', this._handleExecution);
		this.addListener('executed:list-all', this._listAll);
	}

	TodoListController.prototype = Object.create(Controller.prototype);

	/**
	 * Performs all of the updating that is required after the storage has
	 * changed in any way.
	 *
	 * @private
	 */
	TodoListController.prototype._handleStorageChange = function () {
		this.emitEvent('executed:' + this.current.action);
	};

	/**
	 * Sets up the controller by stitching into the DOM.
	 *
	 * @param {String} action Current action,
	 * @param {Object} request Contains values extracted from the URL.
	 * @param {Object} context Object of information that can be passed down from the router.
	 * @private
	 */
	TodoListController.prototype._handleExecution = function (action, request, context) {
		this.createView = new CreateTodoView(context.elements.input);
		this.createView.addListener('input', this._handleInput.bind(this));
		this.listView = new TodoListView(context.elements.list);
	};

	/**
	 * Handles the input from the create view. Builds a model for the input and
	 * stores it.
	 *
	 * @param {String} value The value sent up by the create view.
	 * @private
	 */
	TodoListController.prototype._handleInput = function (value) {
		this.storage.createTodo(value);
	};

	/**
	 * Lists all of the todos.
	 *
	 * @param {String} action Current action,
	 * @param {Object} request Contains values extracted from the URL.
	 * @param {Object} context Object of information that can be passed down from the router.
	 * @private
	 */
	TodoListController.prototype._listAll = function (action, request, context) {
		var todos = this.storage.getAllTodos();
		this._displayTodos(todos);
	};

	/**
	 * Displays the todos.
	 *
	 * @param {Object[]} todos The todos you want to display.
	 * @private
	 */
	TodoListController.prototype._displayTodos = function (todos) {
		var todosData = this._extractTodoData(todos);
		this.listView.render(todosData);
		this._manageNoTodosClass(todos.length);
	};

	/**
	 * Extracts the data objects out of an array of todos.
	 *
	 * @param {TodoModel[]} todos The todo model instances.
	 * @return {Object[]} The extracted data objects.
	 * @private
	 */
	TodoListController.prototype._extractTodoData = function (todos) {
		var i = todos.length;
		var todosData = [];

		while (i--) {
			todosData.push(todos[i].get());
		}

		return todosData;
	};

	/**
	 * Adds or removes the no-todos class based on the amount of todos.
	 *
	 * @param {Number} todoCount
	 * @private
	 */
	TodoListController.prototype._manageNoTodosClass = function (todoCount) {
		var classList = this.current.context.elements.app.classList;
		var noTodosClass = 'no-todos';

		if (todoCount === 0) {
			classList.add(noTodosClass);
		}
		else {
			classList.remove(noTodosClass);
		}
	};

	return TodoListController;
});
