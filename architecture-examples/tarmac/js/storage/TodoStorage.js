define([
	'tarmac/Storage'
], function(Storage) {
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

	return TodoStorage;
});
