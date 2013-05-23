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
	'storage/TodoStorage',
	'routers/HashRouter',
	'controllers/TodoListController'
], function (TodoStorage, HashRouter, TodoListController) {
	'use strict';

	var router = new HashRouter();

	router.setContextObject({
		storage: new TodoStorage(),
		elements: {
			app: document.getElementById('todoapp')
		}
	});

	router.addRoute('root', '', TodoListController, 'list-all');
	router.routeCurrentHash();
});
