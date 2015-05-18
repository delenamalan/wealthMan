/**
  *	Wealth Man
  * 
  * Location:	
  *	client/views/home/main.js
  *
  * Description:
  * Helpers and events for the home template.
  *
  * Author:
  * Delena Malan
  *
  **/
Log.info( Level, "client/views/home/main.js" );

Template.homeTemplate.events({
    'click .loginBox button, submit form': function ( e, t ) {
        e.preventDefault();

        var email = t.$("#loginEmail").val().trim();
        var pass = t.$("#loginPass").val();

        Meteor.loginWithPassword( email, pass,
            function ( e, id ) {
                if ( e ) {
                    Notifications.error( "Error", "Bad Details" );
                } else {
                    Router.go( 'dashboard',  {"_id": Meteor.userId() } );
                }
            }
        );

        return false;
    }
});


/**
  * EOF
  **/
