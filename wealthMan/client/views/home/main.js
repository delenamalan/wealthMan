/**
  * CS 334 - Final Project
  *	Restaurant Perfect
  * 
  * Location:	
  *	client/views/home/main.js
  *
  * Description:
  *
  * Authors:
  *	Rudolf Byker	- 17973340@sun.ac.za
  *	Chris Malan	- 16187288@sun.ac.za
  *	Deléna Malan	- 17524695@sun.ac.za
  *	Andrew Polly	- 17252369@sun.ac.za
  *	Robert Sandell	- 16726723@sun.ac.za
  *	David Schwartz	- 17303184@sun.ac.za
  *
  **/
Log.info( Level, "client/views/home/main.js" );


Template.homeHeaderTemplate.helpers({
});


Template.homeHeaderTemplate.events({
});


Template.homeTemplate.helpers({
});


Template.homeTemplate.events({
    'click .loginBox button, submit form': function ( e, t ) {
	e.preventDefault();

	var email = t.$("#loginEmail").val().trim();
	var pass = t.$("#loginPass").val();

	Meteor.loginWithPassword( email, pass,
	    function ( e, id ) {
		if ( e ) {
		    Notifications.error( "Error", "Bad Details" );
		}
	    }
	);

	return false;
    }
});


/**
  * EOF
  **/
