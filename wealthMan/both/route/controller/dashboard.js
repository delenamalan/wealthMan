/**
  *	Wealth Man
  * 
  * Location:	
  *	both/route/controller/dashboard.js
  *
  * Description:
  * Dashboard page controller.
  *
  * Author:
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
        Meteor.subscribe("userModelSecurities", this.params._id);
    }
});


/**
  * EOF
  **/
