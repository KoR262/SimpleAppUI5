sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.StaffList", {

		onInit : function () {
			var oViewModel = new JSONModel();
			this.getView().setModel(oViewModel, "view");
		}

	});
});