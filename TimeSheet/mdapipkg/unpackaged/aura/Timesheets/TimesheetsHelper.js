({
	fetchTSHelper : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: 'Time Sheet Name', fieldName: 'Name', type: 'text'},
                {label: 'TimeSheet Date', fieldName: 'Timesheet_Date__c', type: 'Date'},
                {label: 'Project', fieldName: 'Project__c', type: 'Text'},
                {label: 'Time Sheet Item', fieldName: 'Time_Sheet_Item__c', type: 'Text'},
             {label: 'Time Sheet Item', fieldName: 'Time_Sheet_Item__c', type: 'Text'},
             {label: 'Stage', fieldName: 'Stage__c', type: 'Text'},
             {label: 'No of Hours', fieldName: 'No_of_Hours__c', type: 'number'},
             {
                 "label": "Billable", "fieldName": "Billable__c", "type": "boolean",  "cellAttributes": {
				"iconName": { "fieldName": "Billable__c_chk" },
                 "iconPosition" :"left"
			} },
            {label: 'Description', fieldName: 'Description__c', type: 'textarea'}
            
            ]);
        var action = component.get("c.fetchRecords");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
           
                //below code used FOR Project lookup  name 
                
            var rows = response.getReturnValue();
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                if (row.Project__c){
                    row.Project__c = row.Project__r.Name;
                }
            }
            
                component.set("v.tableList", response.getReturnValue());
               //
           
              
           
          	        
                
                
                
              //below code for handling billable checkbox
                    
            let sObjs = response.getReturnValue();
			for(let row of  sObjs){
  					for(let col of columns){
   						if(col.type=='boolean' && row[col.fieldName]==true ){
							row[col.fieldName+'_chk'] ='utility:check';
                            
							}
                        	 
						}
          			  }  
                
            }
        });
        
        
            
                

        $A.enqueueAction(action);
        
                    
    }
})