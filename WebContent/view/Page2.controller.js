sap.ui.controller("smax.empReg.view.Page2", {

   onInit : function(){
	   oRouter = this.getOwnerComponent().getRouter();
	   
	   oRouter.getRoute("page2Route").attachRouteMatched(function(oEvent){
		   debugger;
		   var productID = oEvent.getParameter("arguments").prodid;
		   
		   this.getView().bindElement("/ProductSet('"+productID+"')");
	   }, this);
	   
   },
	
	gotoPage3 : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("page3Route");
	}
});