sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"studentRegisterAppDescNs/studentRegisterAdPn/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("studentRegisterAppDescNs.studentRegisterAdPn.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// // enable routing
			this.getRouter().initialize();

			// // set the device model
			// this.setModel(models.createDeviceModel(), "device");

		},
		// createContent: function () {

			// var oStuRegView = new sap.ui.view({
			// 	viewName: "studentRegisterAppDescNs.studentRegisterAdPn.view.stuReg",
			// 	id: "idStuRegView",
			// 	type: "XML"
			// });

			// var oStuMaster = new sap.ui.view({
			// 	viewName: "studentRegisterAppDescNs.studentRegisterAdPn.view.stuHeader",
			// 	id: "idStuHeaderView",
			// 	type: "XML"
			// });

			// var oStuDetail = new sap.ui.view({
			// 	viewName: "studentRegisterAppDescNs.studentRegisterAdPn.view.stuItem",
			// 	id: "idStuItemView",
			// 	type: "XML"
			// });

			// oStuRegView.byId("idStuRegSplitApp").addMasterPage(oStuMaster);
			// oStuRegView.byId("idStuRegSplitApp").addDetailPage(oStuDetail);

			// var oStudentsModel = new sap.ui.model.json.JSONModel();
			// oStudentsModel.loadData("data/mockData/studentRegister.json");
			// oStuRegView.setModel(oStudentsModel);
			
			// return oStuRegView;
		// }
	});
});