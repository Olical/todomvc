define([
	'tarmac/Router'
], function(Router) {
	'use strict';

	/**
	 * Router the runs off of hash based URLs. Hooks into the browser APIs upon
	 * construction.
	 *
	 * @class
	 * @extends Router
	 */
	function HashRouter() {
		Router.call(this);
		window.addEventListener('hashchange', this._routeCurrentHash.bind(this));
		this._routeCurrentHash();
	}

	HashRouter.prototype = Object.create(Router.prototype);

	/**
	 * Parses the current hash and sends it off to this.route to begin the
	 * routing process. This is executed when the class is instantiated or when
	 * the hash changes.
	 *
	 * @return {Object} Current instance for chaining.
	 * @private
	 */
	HashRouter.prototype._routeCurrentHash = function () {
		var hash = window.location.hash;
		var cleanHash = hash.replace(this._hashUrlIdentifier, '');
		this.route(cleanHash);
		return this;
	};

	/**
	 * Builds a URL from a route name and the data required to populate the
	 * route template. Will pretend the hash URL identifier automatically.
	 *
	 * @param {String} name Name of the route to build from. You set the name with addRoute.
	 * @param {Object} data Named components of the URL to populate.
	 * @return {String} The built URL.
	 */
	HashRouter.prototype.reverse = function (name, data) {
		var result = Router.prototype.reverse.call(this, name, data);
		return this._hashUrlIdentifier + result;
	};

	/**
	 * The target string to match the start of a hash URL. This is the part
	 * that should be stripped out before sending it to this.route.
	 *
	 * @type {String}
	 * @private
	 */
	HashRouter.prototype._hashUrlIdentifier = '#!/';

	return HashRouter;
});
