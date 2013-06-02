define([
	'tarmac/View',
	'hbs!templates/todo-list'
], function (View, todoListTemplate) {
	'use strict';

	/**
	 * Displays a list of todos.
	 *
	 * @param {Element} listElement The element to render the list items into.
	 * @class
	 * @extends View
	 */
	function TodoListView(listElement) {
		View.call(this);
		this._listElement = listElement;
	}

	TodoListView.prototype = Object.create(View.prototype);

	/**
	 * Renders a list of todo models into HTML and dumps it inside the list
	 * element. You set the list element with the constructor.
	 *
	 * @param {TodoModel[]} todos The todos to render.
	 */
	TodoListView.prototype.render = function (todos) {
		var listItemsHTML = todoListTemplate({
			todos: todos
		});

		this._listElement.innerHTML = listItemsHTML;
	};

	return TodoListView;
});
