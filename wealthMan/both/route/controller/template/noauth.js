/**
  * Wealth Man
  * 
  * Location:	
  *	both/route/controller/template/noauth.js
  *
  * Description:
  *	General Controller with authentication
  *	to filter out unauthenticated users.
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
