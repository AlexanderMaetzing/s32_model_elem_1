sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ama.s32.s32modelelem1.controller.Main", {
        onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("/data/Oscar_Songs.json");
			this.getView().setModel(oModel);
		}
    });
});