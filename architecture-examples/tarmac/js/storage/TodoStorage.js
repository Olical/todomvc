define([
	'tarmac/Storage',
	'models/TodoModel'
], function (Storage, TodoModel) {
	'use strict';

	/**
	 * Stores all of the todos and provides convenient access methods.
	 *
	 * @class
	 * @extends Storage
	 */
	function TodoStorage() {
		Storage.call(this);
	}

	TodoStorage.prototype = Object.create(Storage.prototype);

	/**
	 * Simply fetches all of the todo models.
	 *
	 * @return {Object[]} An array of todo models.
	 */
	TodoStorage.prototype.getAllTodos = function () {
		return this.get(TodoModel);
	};

	/**
	 * Creates a todo and stores it, then returns the built object.
	 *
	 * @param {String} value The value to store inside the todo.
	 * @return {Object} A built todo.
	 */
	TodoStorage.prototype.createTodo = function (value) {
		var todo = new TodoModel({
			value: value
		});
		this.set(TodoModel, todo);
		return todo;
	};

	return TodoStorage;
});
