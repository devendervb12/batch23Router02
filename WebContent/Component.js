
sap.ui.core.UIComponent.extend("smax.empReg.Component", {
	metadata : {
		rootView : "smax.empReg.view.App",
		routing : {
			config : {
				  viewType : "XML",
	        	  controlId : "idApp",
	        	  controlAggregation : "pages",
	        	  routerClass : "sap.m.routing.Router"
				
			},
			routes : [
			          {
			        	  pattern : "",
			        	  name : "pageRoute",
			        	  viewName : "smax.empReg.view.Page1"
			        	
			          },
			          {
			        	  pattern : "page2",
			        	  name : "page2Route",
			        	  viewName : "smax.empReg.view.Page2"
			        	  
			          },
			          {
			        	  pattern : "page3",
			        	  name : "page3Route",
			        	  viewName : "smax.empReg.view.Page3"
			        	  	  
			        	  
			          }
			          ]
		}
	},
	
	init : function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
	}
})
