({
    toggleAction : function(component, event, secId) {
        var acc = component.find(secId);
        for(var cmp in acc) {
            $A.util.toggleClass(acc[cmp], 'slds-show');  
            $A.util.toggleClass(acc[cmp], 'slds-hide');  
        }
    },
    createObjectData: function(component, event) {
        // get the contactList from component and add(push) New Object to List  
        var RowItemList = component.get("v.TimeSheetList");
        RowItemList.push({
            'sobjectType': 'Project_Timesheet__c',
            'Timesheet_Date__c': '',
          	'Project__c': '',
            'Time_Sheet_Item__c': '',
             'Stage__c': '',
             'No_of_Hours__c': '',
             'Billable__c': false,
             'Description__c': ''
        });
        // set the updated list to attribute (contactList) again    
        // 
      
        component.set("v.TimeSheetList", RowItemList);
        
        
        
        
        },
    
  
})