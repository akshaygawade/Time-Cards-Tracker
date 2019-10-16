({
   
    
	doInit : function(component, event, helper) {
	
        
        for(var i =0;i<5;i++){
        	helper.createObjectData(component, event);
          }
	},
    
      handleChange: function (cmp, event) {
        // This will contain the string of the "value" attribute of the selected option
        var selectedOptionValue = event.getParam("value");
        //alert("Option selected with value: '" + selectedOptionValue + "'");
    },
    panelOne : function(component, event, helper) {
        helper.toggleAction(component, event, 'panelOne');
    },
    
    handleSelectAll: function(component, event, helper) {
    
        var checkvalue = component.find("selectAll").get("v.checked");        
        var checkTimesheet = component.find("checkTimesheet"); 
        if(checkvalue == true){
            for(var i=0; i<checkTimesheet.length; i++){
                checkTimesheet[i].set("v.checked",true);
            }
        }
        else{ 
            for(var i=0; i<checkTimesheet.length; i++){
                checkTimesheet[i].set("v.checked",false);
            }
        }
    },
    
    Save: function(component, event, helper) {
         
            var action = component.get("c.SaveTimeSheetList");
            action.setParams({
                "ListTimeSheet": component.get("v.TimeSheetList")
            });
            // set call back 
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                   
                    component.set("v.TimeSheetList", []);
                    helper.createObjectData(component, event);
                    alert('record Save');
                }
            });
            // enqueue the server side action  
            $A.enqueueAction(action);
//}
    },
   addNewRow: function(component, event, helper) {
        // call the comman "createObjectData" helper method for add new Object Row to List  
        helper.createObjectData(component, event);
    },
    
     removeDeletedRow: function(component, event, helper) {
        // get the selected row Index for delete, from Lightning Event Attribute  
        var index = event.getParam("indexVar");
        // get the all List (contactList attribute) and remove the Object Element Using splice method    
        var AllRowsList = component.get("v.TimeSheetList");
        AllRowsList.splice(index, 1);
        // set the contactList after remove selected row element  
        component.set("v.TimeSheetList", AllRowsList);
    },
      
      handleLookupSelectEvent : function (component, event, helper) {
       window.selectedrecordId = event.getParam("recordId");
        window.selectedrecordName = event.getParam("recordName");
      // component.set("v.TSInstance.Project__c", selectedRecordId);
      // 
    //    component.set("v.TSInstance.Project__c", selectedrecordName);
  ///  alert(selectedrecordName);
     
    }
    ,
    
    cloneRow: function(component, event, helper) {
        
        var index = event.getParam("indexVar");
     //   var MyList = event.getParam("list");
     var TSInstance = event.getParam("instance");
        
        
        var sdate= new Date(TSInstance.Timesheet_Date__c);
//sdate.setDate(TSInstance.Timesheet_Date__c);
 
    var nday = new Date();
        
    nday = sdate.getFullYear() + "-" + (sdate.getMonth() + 1) + "-" + (sdate.getDate()+1);
 
        
        
        var project = window.selectedrecordId;
        
                     
  //alert(project);
        
        var item = TSInstance.Time_Sheet_Item__c;
        var stage = TSInstance.Stage__c;
    	var hrs= TSInstance.No_of_Hours__c;
        var bill = TSInstance.Billable__c;
        var des = TSInstance.Description__c
       
     var RowItemList = component.get("v.TimeSheetList");
         RowItemList.splice(index+1,0,{
            'sobjectType': 'Project_Timesheet__c',
            'Timesheet_Date__c': nday,
         	'Project__c': project,
            'Time_Sheet_Item__c': item,
             'Stage__c': stage,
             'No_of_Hours__c': hrs,
             'Billable__c': bill,
             'Description__c': des
        });
      
        
   
        
        component.set("v.TimeSheetList", RowItemList);
     
        
    //component.set("v.TimeSheetList..selectedRecordName", project);
 		
    },
       
   
   
    goback: function(component, event, helper){
  
       // console.log('Enter Here');
        var evt = $A.get("e.force:navigateToComponent");
        //console.log('evt'+evt);
        evt.setParams({
             componentDef: "c:Timesheets",
            componentAttributes :{}
        });
       
    evt.fire();
    },
    
})