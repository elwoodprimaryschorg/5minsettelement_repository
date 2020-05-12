sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("studentRegisterAppDescNs.studentRegisterAdPn.controller.stuHeader", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf studentRegisterAppDescNs.studentRegisterAdPn.view.stuHeader
		 */

		onInit: function () {
			alert("stuHeader Init function");
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

		},
		calculate: function (num1, num2, callbackFunction) {

			return callbackFunction(num1, num2);

		},

		calcMul: function (num1, num2) {
			return num1 * num2;
		},

		calcSum: function (num1, num2) {
			return num1 + num2;
		},

		onItemPress: function (oEvent) {
			var res1 = null;
			// alert(this.calculate(5, 15, "calcMul"));
			// alert(this.calculate(5, 15, "calcSum"));

			this.oRouter.navTo("detailRoute", {
				zstuId: oEvent.getSource().getSelectedContextPaths()[0].slice(10)
			});
			// var oView2 = oEvent.getSource().getParent().getParent().getParent().getParent().getCurrentDetailPage();
			// oView2.bindObject(oEvent.getParameters().listItem.getParent().getSelectedContextPaths().toString());

			oEvent.oSource.oParent.oParent.oParent.getParent().hideMaster(); //hiding master page for mobile view
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf studentRegisterAppDescNs.studentRegisterAdPn.view.stuHeader
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf studentRegisterAppDescNs.studentRegisterAdPn.view.stuHeader
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf studentRegisterAppDescNs.studentRegisterAdPn.view.stuHeader
		 */
		//	onExit: function() {
		//
		//	}

	});

});