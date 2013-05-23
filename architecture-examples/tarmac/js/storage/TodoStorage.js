define([
	'tarmac/Storage',
	'models/TodoModel'
], function(Storage, TodoModel) {
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
	TodoStorage.prototype.getAllTodos = function() {
		return this.get(TodoModel);
	};

	return TodoStorage;
});
