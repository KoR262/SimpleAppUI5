sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,
	JSONModel,
	Filter,
	FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.StaffList", {

		onInit : function () {
			var oViewModel = new JSONModel();
			this.getView().setModel(oViewModel, "view");
		},

		onSelectionFinish: function (oEvent) {
			var aFilter = [];
			var aSelectedItems = oEvent.getParameter("selectedItems");
  			var aSelectedTexts = aSelectedItems.map(oItem => oItem.getText());
			for (var i = 0; i < aSelectedTexts.length; i++){
				if (aSelectedTexts){
					aFilter.push(new Filter("Vacation", FilterOperator.Contains, aSelectedTexts[i]));
				}
			}
			var oList = this.byId("staffList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}

	});
});