({
    fetchTS : function(component, event, helper) {
        helper.fetchTSHelper(component, event, helper);
    },
    
    navigate:function(component,event,helper){
       // console.log('Enter Here');
        var evt = $A.get("e.force:navigateToComponent");
        //console.log('evt'+evt);
        evt.setParams({
             componentDef: "c:newTimesheet",
            componentAttributes :{}
        });
       
    evt.fire();
    },
 
})