sap.ui.controller("smax.empReg.view.Page2", {


	gotoPage3 : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("page3Route");
	}
});