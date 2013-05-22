requirejs.config({
	paths: {
		text: '../components/requirejs-text/text',
		Handlebars: '../components/handlebars.js/dist/handlebars',
		templates: '../templates',
		tarmac: '../components/tarmac/src'
	},
	shim: {
		Handlebars: {
			exports: 'Handlebars'
		}
	}
});

define([
	'routers/HashRouter'
], function (HashRouter) {
	'use strict';
	var router = new HashRouter();
});
