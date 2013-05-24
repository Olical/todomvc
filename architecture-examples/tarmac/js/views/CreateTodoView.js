define([
	'tarmac/View'
], function (View) {
	'use strict';

	/**
	 * Uses the input to create todos.
	 *
	 * @class
	 * @extends View
	 */
	function CreateTodoView() {
		View.call(this);
	}

	CreateTodoView.prototype = Object.create(View.prototype);

	return CreateTodoView;
});
