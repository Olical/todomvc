define([
	'tarmac/View'
], function (View) {
	'use strict';

	/**
	 * Uses the input to create todos.
	 *
	 * @param {Element} input The input element to create todos from.
	 * @class
	 * @extends View
	 */
	function CreateTodoView(input) {
		View.call(this);
		this.input = input;
		input.addEventListener('keydown', this._handleKeyPress.bind(this));
	}

	CreateTodoView.prototype = Object.create(View.prototype);

	/**
	 * Event handler for key presses within the input element. Will delegate
	 * the required tasks to other methods depending on what happened.
	 *
	 * @param {Event} e The event that just occurred.
	 * @private
	 */
	CreateTodoView.prototype._handleKeyPress = function (e) {
		if (e.keyCode === 13) {
			this._publishCurrentValue();
		}
	};

	/**
	 * Publishes the inputs current value via the input event and then wipes
	 * the input clean. It will only go through with it if there is a value to
	 * use though, an empty string will be ignored.
	 *
	 * @private
	 */
	CreateTodoView.prototype._publishCurrentValue = function () {
		var value = this.input.value;

		if (value) {
			this.emitEvent('input', value);
			this.input.value = '';
		}
	};

	return CreateTodoView;
});
