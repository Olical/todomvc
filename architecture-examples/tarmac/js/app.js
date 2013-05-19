requirejs.config({
	paths: {
		text: '../components/requirejs-text/text',
		Handlebars: '../components/handlebars.js/dist/handlebars',
		templates: '../templates'
	},
	shim: {
		Handlebars: {
			exports: 'Handlebars'
		}
	}
});

define([
	'Handlebars'
], function (Handlebars) {
	'use strict';
});
