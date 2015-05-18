/**
  * Wealth Man
  * 
  * Location:	
  *	both/route/controller/template/auth.js
  *
  * Description:
  *	General controller with authentication
  *	to filter out unauthenticated users.
  *
  * Author:
  * Delena Malan
  **/
Log.info( Level, "both/route/controller/template/auth.js" );


ControllerAuth = RouteController.extend({
    layoutTemplate: 'baseTemplate',
    onBeforeAction: function () {
        if ( !Meteor.userId() || Router.current().params._id != Meteor.userId() ) {
            this.render( 'homeTemplate');
        } else {
            this.next();
        }
    }
});


/**
  * EOF
  **/
