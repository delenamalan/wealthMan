/**
  * CS 334 - Final Project
  * Restaurant Perfect
  * 
  * Location:	
  *	both/route/controller/template/auth.js
  *
  * Description:
  *	General Controller with authentication
  *	to filter out unauthenticated users.
  *
  * Authors:
  *	Rudolf Byker	- 17973340@sun.ac.za
  *	Chris Malan	- 16187288@sun.ac.za
  *	Deléna Malan	- 17524695@sun.ac.za
  *	Andrew Polly	- 17252369@sun.ac.za
  *	Robert Sandell	- 16726723@sun.ac.za
  *	David Schwartz	- 17303184@sun.ac.za
  **/
Log.info( Level, "both/route/controller/template/auth.js" );


ControllerAuth = RouteController.extend({
    layoutTemplate: 'baseTemplate',
    onBeforeAction: function () {
		this.next();
		/*
	if ( !Meteor.userId() ) {
	    this.render( 'loginTemplate' );
	} else {
	    this.next();
	}
	*/
    }
});


/**
  * EOF
  **/
