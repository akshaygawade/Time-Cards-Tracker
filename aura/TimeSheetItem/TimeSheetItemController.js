({
	
	doInit : function(component, event, helper) {
	var today = new Date();
	
        //here need to add If clone button not clicked the execute below
      //  if(flag){
        	//component.set('v.TSInstance.Timesheet_Date__c', today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
        	//component.set('v.TSInstance.Timesheet_Date__c',$A.localizationService.formatDate(today));
       		
       // }
       
	},
    
      handleChange: function (cmp, event) {
        // This will contain the string of the "value" attribute of the selected option
        var selectedOptionValue = event.getParam("value");
        //alert("Option selected with value: '" + selectedOptionValue + "'");
    },

    AddNewRow : function(component, event, helper){
       // fire the AddNewRowEvt Lightning Event 
        component.getEvent("AddRowEvt").fire();     
    },
      removeRow : function(component, event, helper){
     // fire the DeleteRowEvt Lightning Event and pass the deleted Row Index to Event parameter/attribute
       component.getEvent("DeleteRowEvt").setParams({"indexVar" : component.get("v.rowIndex") }).fire();
    },
    cloneRow : function(component, event, helper){
        
      var flag=true;
     // fire the cloneEvt Lightning Event and pass Row Index to Event parameter/attribute
        component.getEvent("cloneEvt").setParams({"indexVar" : component.get("v.rowIndex"),
                                                 "instance":  component.get("v.TSInstance")}).fire();
    },
    
      handleLookupSelectEvent : function (component, event, helper) {
        var selectedRecordId = event.getParam("recordId");
        var selectedrecordName = event.getParam("recordName");
       component.set("v.TSInstance.Project__c", selectedRecordId);
    //    component.set("v.TSInstance.Project__c", selectedrecordName);
     
    }
    
	
})