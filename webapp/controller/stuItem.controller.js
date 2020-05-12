sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("studentRegisterAppDescNs.studentRegisterAdPn.controller.stuItem", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf studentRegisterAppDescNs.studentRegisterAdPn.view.stuItem
		 */
		onInit: function () {
			alert("stuItem Init function");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this.zpatternMatchedFunction, this);
		},

		zpatternMatchedFunction: function (oEvent) {
			this.getView().bindElement("/students/" + oEvent.getParameter("arguments").zstuId);
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf studentRegisterAppDescNs.studentRegisterAdPn.view.stuItem
		 */
		onBeforeRendering: function () {
			alert("stuItem onBeforeRendering function");
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf studentRegisterAppDescNs.studentRegisterAdPn.view.stuItem
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf studentRegisterAppDescNs.studentRegisterAdPn.view.stuItem
		 */
		//	onExit: function() {
		//
		//	}

	});

});