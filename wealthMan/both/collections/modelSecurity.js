/**
  * Wealth Man
  * 
  * Location:	
  *	both/collections/modelSecurity.js
  *
  * Description:
  * Definition of the collection in which model-security pairs and their
  * percentages are stored.
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "both/collections/modelSecurity.js" );


/**
  * Create the new collection to hold all the 
  * model-security data.
  **/
CollectionModelSecurity = new Mongo.Collection( "modelSecurity" );

SchemaModelSecurity = new SimpleSchema({
    // Id of the model
    "_model" : {
    type : String,
    max : 20
    },
    // Id of the security belonging to the model
    "_security" : {
    type : String,
    max : 20
    },
    // Percentage this security makes up of the model
    "perc" : {
    type : Number,
    min : 0,
    max : 100
    }
});


/**
  * Allow DB Operations on this collection
  **/
CollectionModelSecurity.allow({
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
