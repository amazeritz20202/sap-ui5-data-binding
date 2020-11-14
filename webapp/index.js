sap.ui.require([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
 

	new ComponentContainer({
		name: "sap.ui.demo.db",
		settings : {
			id: "CRUD"
		},
		async: true
	}).placeAt("content");

}); 





// sap.ui.require([
//     "sap/m/Text",
//     "sap/ui/model/json/JSONModel",
//     "sap/ui/core/mvc/XMLView"
// ],function(Text,JSONModel,XMLView){

// "use strict";
// sap.ui.getCore().attachInit(function(){

//     var mdl = new JSONModel(    
//      {
//        myText :   "Welcome",
//        firstName : "Selva",
//        lastName : "kumar",
//        enabled : true,
//        panelHeaderText : "Welcome to Panel"
//      } 
//     );

//     sap.ui.getCore().setModel(mdl);

//     // new Text(
//     //     {
//     //         text : '{/myText}'

//     //     }
//     // ).placeAt("content");

// new XMLView(
//     {

//         viewName: "sap.ui.demo.db.view.CRUD"
//     }

// ).placeAt("content");
// })
// }
// )


