define([
	'tarmac/Controller'
], function(Controller) {
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
		this.addListener('executed:list-all', this._listAll);
	}

	TodoListController.prototype = Object.create(Controller.prototype);

	/**
	 * Lists all of the todos.
	 *
	 * @param {String} action Current action,
	 * @param {Object} request Contains values extracted from the URL.
	 * @param {Object} context Object of information that can be passed down from the router.
	 */
	TodoListController.prototype._listAll = function(action, request, context) {
		var todos = context.storage.getAllTodos();

		if (todos.length === 0) {
			context.elements.app.classList.add('no-todos');
		}
	};

	return TodoListController;
});
