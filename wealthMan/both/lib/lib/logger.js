/**
  * CS 334 - Final Project
  * Restaurant Perfect
  * 
  * Location:	
  *	both/lib/logger.js
  *
  * Description:
  *	Log and Level objects on global scope
  *	for application logging and debugging.
  *
  * Authors:
  *	Rudolf Byker	- 17973340@sun.ac.za
  *	Chris Malan	- 16187288@sun.ac.za
  *	Deléna Malan	- 17524695@sun.ac.za
  *	Andrew Polly	- 17252369@sun.ac.za
  *	Robert Sandell	- 16726723@sun.ac.za
  *	David Schwartz	- 17303184@sun.ac.za
  *
  * @module logger
  **/


/**
  * TODO: Description
  *
  * @class Log
  **/
var logger = function () {
    /**
      * FATAL logging level
      *
      * @property FATAL
      * @type Number
      * @default 0
      **/
    this.FATAL = 0;

    
    /**
      * ERROR logging level
      *
      * @property ERROR
      * @type Number
      * @default 1
      **/
    this.ERROR = 1;
    
    
    /**
      * TODO: Descriptions
      **/
    this.WARN  = 2;
    this.INFO  = 3;
    this.DEBUG = 4;
    this.TRACE = 5;
};


/**
  * .
  *
  * @method log
  * @param { Number } localLevel Requested application logging level at calling scope.
  * @param { Number } messageLevel Logging level of this current message.
  * @param { Object } message The message to be logged.
  **/
logger.prototype.log = function ( localLevel, messageLevel, message ) {
    
    if ( localLevel >= messageLevel ) {
	console.log( message );
    }

    switch ( messageLevel ) {
	case this.FATAL:
	    // TODO:
	    // Log message to file
	    // Email Someone
	    // Shutdown / Restart Application
	break;
	case this.ERROR:
	    // TODO:
	    // Log message to file
	    // Email Someone
	    // Recover Application
	break;
	case this.WARN:
	    // TODO: 
	    // Log message to file
	    // Email Someone
	break;
	case this.INFO:
	    // TODO:
	    // Log message to file
	break;
	case this.DEBUG:
	    // TODO: 
	    // Log message to file
	break;
	case this.TRACE:
	    // TODO: 
	    // Probably Nothing
	break;
    }
};


/**
  * 
  **/
logger.prototype.fatal = function ( localLevel, message ) {
    this.log( localLevel, this.FATAL, message );
};


/**
  * 
  **/
logger.prototype.error = function ( localLevel, message ) {
    this.log( localLevel, this.ERROR, message );
};


/**
  * 
  **/
logger.prototype.warn = function ( localLevel, message ) {
    this.log( localLevel, this.WARN, message );
};


/**
  * 
  **/
logger.prototype.info = function ( localLevel, message ) {
    this.log( localLevel, this.INFO, message );
};


/**
  * 
  **/
logger.prototype.debug = function ( localLevel, message ) {
    this.log( localLevel, this.DEBUG, message );
};


/**
  * 
  **/
logger.prototype.trace = function ( localLevel, message ) {
    this.log( localLevel, this.TRACE, message );
};


/**
  * Create new logger object on global scope.
  **/
Log = new logger();


/**
  * Set global logging level of the application
  **/
Level = Log.INFO;


/**
  * Logs out file location as per default specification
  * for all files in the project.
  **/
Log.log( Level, Log.INFO, "both/lib/logger.js" );


/**
  * EOF
  **/
