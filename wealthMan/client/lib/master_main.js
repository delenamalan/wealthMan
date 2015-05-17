/**
  * WealthMan
  * 
  * Location:	
  *	client/lib/master_main.js
  *
  * Description:
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "client/lib/master_main.js" );


Template.headerAccessTemplate.helpers({
    'username': function () {
	/**
	  * Return the name of the currently 
	  * logged in user.
	  **/
	return Meteor.user().profile.name;
    }
});


Template.headerAccessTemplate.events({
    'submit form, click .headerAccessLogin button': function ( e, t ) {
	e.preventDefault();

	var email = t.$("#access-email").val().trim();
	var pass = t.$("#access-pass").val();

	Meteor.loginWithPassword( email, pass,
	    function ( e, id ) {
		if ( e ) {
		    Notifications.error( "Error", "Bad Details" );
		}
	    }
	);

	return false;
    },
    'click #access-logout': function ( e, t ) {
	e.preventDefault();

	Meteor.logout();
	Router.go( 'index' );

	return false;
    }
});


Template.headerMenuTemplate.helpers({
});


/**
  * EOF
  **/
