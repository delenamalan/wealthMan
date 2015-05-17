/**
  * Wealth Man
  * 
  * Location:	
  *	both/route/controller/register.js
  *
  * Description:
  *
  * Author:
  * Delena Malan
  *
  * @module logger
  **/
Log.log( Level, Log.INFO, "both/route/controller/register.js" );


ControllerRegister = ControllerNoAuth.extend({
    template: 'registerTemplate',
    yieldTemplates: {
	'headerTemplate': { to: 'header' },
	'footerTemplate': { to: 'footer' }
    }
});


/**
  * EOF
  **/
