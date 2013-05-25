define([
	'tarmac/Controller',
	'views/CreateTodoView'
], function (Controller, CreateTodoView) {
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
		this.addListener('executed', this._handleExecution);
		this.addListener('executed:list-all', this._listAll);
	}

	TodoListController.prototype = Object.create(Controller.prototype);

	/**
	 * Sets up the controller by stitching into the DOM.
	 *
	 * @param {String} action Current action,
	 * @param {Object} request Contains values extracted from the URL.
	 * @param {Object} context Object of information that can be passed down from the router.
	 * @private
	 */
	TodoListController.prototype._handleExecution = function (action, request, context) {
		this.context = context;
		this.createView = new CreateTodoView(context.elements.input);
		this.createView.addListener('input', this._handleInput.bind(this));
	};

	/**
	 * Handles the input from the create view. Builds a model for the input and
	 * stores it.
	 *
	 * @param {String} value The value sent up by the create view.
	 * @private
	 */
	TodoListController.prototype._handleInput = function (value) {
		this.context.storage.createTodo(value);
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
		var todos = context.storage.getAllTodos();

		if (todos.length > 0) {
			context.elements.app.classList.remove('no-todos');
		}
	};

	return TodoListController;
});
