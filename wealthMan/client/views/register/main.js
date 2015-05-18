/**
 * Wealth Man
 * 
 * Location:	
 * client/views/register/main.js
 *
 * Description:
 * Helpers and events for the register template.
 *
 * Author:
 * Delena Malan
 *
 **/
Log.info( Level, "client/views/register/main.js" );


Template.registerTemplate.events({
	'submit form': function( e, t ) {
	    e.preventDefault();

	    var email = t.$("#register-email").val().trim();
	    var pass = t.$("#register-pass").val();
	
	    Accounts.createUser({
            email: "" + email,
            password: "" + pass
	    },
	    function ( e ) {
            if ( e ) {
                Log.error( Level, [ "Error:", e ] );
            }
	    });

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
