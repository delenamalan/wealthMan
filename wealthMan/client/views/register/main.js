/**
 * Wealth Man
 * 
 * Location:	
 *	client/views/register/main.js
 *
 * Description:
 *
 * Author:
 * Delena Malan
 *
 **/
Log.info( Level, "client/views/register/main.js" );


Template.registerTemplate.helpers({
});


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
	
        Router.go( 'dashboard',  {"_id": Meteor.userId() } );
		
        return false;
    }
});


/**
 * EOF
 **/
