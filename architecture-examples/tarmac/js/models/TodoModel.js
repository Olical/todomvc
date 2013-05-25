define([
	'tarmac/Model'
], function (Model) {
	'use strict';

	/**
	 * Basic todo model. Sets some default values after you set the value.
	 *
	 * @param {Object} data Initial data to store in the model.
	 * @class
	 * @extends Model
	 */
	function TodoModel(data) {
		Model.call(this, data);
		this.set(this._defaultData);
	}

	TodoModel.prototype = Object.create(Model.prototype);

	/**
	 * Default data set to assign to the model.
	 *
	 * @type {Object}
	 * @private
	 */
	TodoModel.prototype._defaultData = {
		done: false
	};

	/**
	 * Returns the current value to be used as a salt.
	 *
	 * @return {String}
	 * @private
	 */
	TodoModel.prototype._getSalt = function () {
		return this.get('value');
	};

	return TodoModel;
});
