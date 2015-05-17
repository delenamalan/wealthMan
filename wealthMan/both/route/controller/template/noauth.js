/**
  * CS 334 - Final Project
  * Restaurant Perfect
  * 
  * Location:	
  *	both/route/controller/template/noauth.js
  *
  * Description:
  *	General Controller with no authentication.
  *
  * Authors:
  *	Rudolf Byker	- 17973340@sun.ac.za
  *	Chris Malan	- 16187288@sun.ac.za
  *	Deléna Malan	- 17524695@sun.ac.za
  *	Andrew Polly	- 17252369@sun.ac.za
  *	Robert Sandell	- 16726723@sun.ac.za
  *	David Schwartz	- 17303184@sun.ac.za
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
