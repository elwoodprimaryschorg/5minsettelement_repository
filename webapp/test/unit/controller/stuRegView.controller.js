/*global QUnit*/

sap.ui.define([
	"studentRegisterAppDescNs/studentRegisterPn/controller/stuRegView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("stuRegView Controller");

	QUnit.test("I should test the stuRegView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});