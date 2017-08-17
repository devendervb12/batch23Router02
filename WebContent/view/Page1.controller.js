sap.ui.controller("smax.empReg.view.Page1", {
  
	gotoPage2 : function(){
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("page2Route");
		
	},
	onItemPress : function(oControlEvent){
	//	debugger;
		// pick the product id from item
		var productID = oControlEvent.getSource().getTitle();

		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("page2Route", {prodid : productID});
		
	}

});