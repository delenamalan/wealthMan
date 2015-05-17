/**
  *	Wealth Man
  * 
  * Location:	
  *	both/route/controller/home.js
  *
  * Description:
  *
  * Authors:
  * Delena Malan
  **/
Log.log( Level, Log.INFO, "both/route/controller/home.js" );


ControllerHome = ControllerNoAuth.extend({
    template: 'homeTemplate',
    yieldTemplates: {
	'headerTemplate': { to: 'header' },
	'footerTemplate': { to: 'footer' }
    }
});


/**
  * EOF
  **/
