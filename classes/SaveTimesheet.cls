public  with sharing class  SaveTimesheet {

@AuraEnabled
    public static void SaveTimeSheetList(List<Project_TimeSheet__c> ListTimeSheet){
        Insert ListTimeSheet;
    }
}