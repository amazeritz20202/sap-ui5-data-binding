sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict"
    return Controller.extend("sap.ui.demo.db.controller.CRUD",{
        onShowHello : function () {
            // Show a native or vanailla JS alert
            alert("Hello there!");
        }
    });
});