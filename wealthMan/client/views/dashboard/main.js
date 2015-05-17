/**
  * WealthMan
  * 
  * Location:	
  *	client/views/dashboard/main.js
  *
  * Description:
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "client/views/dashboard/main.js" );


Template.dashboardTemplate.helpers({
    "models" : function() {
        var models = [];

        // TODO subscribe to user's models

        return models;
    },
    "securities" : function() {
        var securities = [];

        // TODO: Subscribe to user's securites

        return securities;
    }
});

Template.dashboardTemplate.events({
});


/**
  * EOF
  **/
