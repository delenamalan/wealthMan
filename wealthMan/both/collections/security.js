/**
  * Wealth Man
  * 
  * Location:	
  *	both/collections/security.js
  *
  * Description:
  * Definition of the collection in which securites are stored.
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "both/collections/security.js" );


/**
  * Create the new collection to hold all the 
  * security data.
  **/
CollectionSecurity = new Mongo.Collection( "security" );


SchemaSecurity = new SimpleSchema({
    // User that this security belongs to
    "_user" : {
    type : String,
    max : 20
    },
    // Name of the security
    "name" : {
    type : String,
    max : 255
    },
    // Description of security
    "desc" : {
    type : String,
    max : 2048 
    },
    // Price of security
    "price" : {
    type : Number,
    min : 0
    }
});

/**
  * Allow DB Operations on this collection
  **/
CollectionSecurity.allow({
    'insert': function ( userId, doc ) {
	return true;
    },
    'update': function ( userId, doc, fields, modifier ) {
	return true;
    },
    'remove': function ( userId, doc ) {
	return true;
    }
});


/**
  * EOF
  **/
