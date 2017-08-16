sap.ui.controller("smax.empReg.view.Page1", {
  
	gotoPage2 : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("page2Route");
		
	}

});