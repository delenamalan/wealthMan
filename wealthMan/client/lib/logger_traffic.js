/**
  * CS 334 - Final Project
  * Restaurant Perfect
  * 
  * Location:	
  *	client/lib/logger_traffic.js
  *
  * Description:
  * 	Log DDP Traffic to the browser console.
  *
  * Authors:
  *	Rudolf Byker	- 17973340@sun.ac.za
  *	Chris Malan	- 16187288@sun.ac.za
  *	Deléna Malan	- 17524695@sun.ac.za
  *	Andrew Polly	- 17252369@sun.ac.za
  *	Robert Sandell	- 16726723@sun.ac.za
  *	David Schwartz	- 17303184@sun.ac.za
  **/


Log.log(Level, Log.INFO, "client/lib/logger_traffic.js");


//if ( level >= debug.DEBUG ) {
//    /**
//      * log sent messages
//      **/
//    var _send = Meteor.connection._send;
//	Meteor.connection._send = function ( obj ) {
//	    // ignore heartbeat
//	    if ( obj.msg != "pong" ) {
//		console.log( "send", obj );
//	    }
//	    _send.call( this, obj );
//	};
//
//    /**
//      * log received messages
//      **/
//    Meteor.connection._stream.on( 'message', function ( msg ) {
//	var obj = JSON.parse( msg );
//	// ignore heartbeat
//	if ( obj.msg != "ping" ) {
//	    console.log( "receive", obj );
//	}
//    });
//}


/**
  * EOF
  **/
