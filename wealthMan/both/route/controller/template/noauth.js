/**
  * Wealth Man
  * 
  * Location:	
  *	both/route/controller/template/noauth.js
  *
  * Description:
  *	General controller for pages where authentication isn't needded.
  *
  * Author:
  * Delena Malan
  **/
Log.info( Level, "both/route/controller/template/noauth.js" );


ControllerNoAuth = RouteController.extend({
    layoutTemplate: 'baseTemplate',
    onBeforeAction: function () {
        this.next();
    }
});


/**
  * EOF
  **/
