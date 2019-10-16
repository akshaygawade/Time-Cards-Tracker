public class DatatableController {

   @AuraEnabled public string Risk {get;set;}
@AuraEnabled
    public static List <Project_Timesheet__c> fetchRecords() {
        //Qyery 10 accounts
        List<Project_Timesheet__c> TimeList = [SELECT  Name,Timesheet_Date__c,Project__r.Name,Time_Sheet_Item__c,Stage__c,No_of_Hours__c,Billable__c,Description__c from Project_Timesheet__c  LIMIT 15];
        //return list of accounts
        //

        return TimeList;
    }
    
}