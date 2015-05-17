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


ControllerDashboard = ControllerNoAuth.extend({
    template: 'dashboardTemplate',
    yieldTemplates: {
	'homeHeaderTemplate': { to: 'header' },
	'footerTemplate': { to: 'footer' }
    }
});


/**
  * EOF
  **/
