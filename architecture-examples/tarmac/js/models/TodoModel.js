define([
	'tarmac/Model'
], function(Model) {
	'use strict';

	/**
	 * @param {Object} data Initial data to store in the model.
	 * @class
	 * @extends Model
	 */
	function TodoModel(data) {
		Model.call(this, data);
	}

	TodoModel.prototype = Object.create(Model.prototype);

	return TodoModel;
});
