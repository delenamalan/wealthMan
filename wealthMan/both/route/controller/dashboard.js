/**
  *	Wealth Man
  * 
  * Location:	
  *	both/route/controller/dashboard.js
  *
  * Description:
  *
  * Authors:
  * Delena Malan
  **/
Log.log( Level, Log.INFO, "both/route/controller/dashboard.js" );


ControllerDashboard = ControllerAuth.extend({
    template : 'dashboardTemplate',
    yieldTemplates : {
        'headerTemplate': { to: 'header' },
        'footerTemplate': { to: 'footer' }
    },
    onAfterAction : function() {
        Meteor.subscribe("userModels", this.params._id);
        Meteor.subscribe("userSecurities", this.params._id);
    }
});


/**
  * EOF
  **/
