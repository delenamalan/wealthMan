/**
  * Wealth Man
  * 
  * Location:	
  *	both/collections/model.js
  *
  * Description:
  * Definition of the collection in which models are stored.
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "both/collections/model.js" );


/**
  * Create the new collection to hold all the 
  * model data.
  **/
CollectionModel = new Mongo.Collection( "model" );


SchemaModel = new SimpleSchema({
    // User that this model belongs to
    "_user" : {
    type : String,
    max : 20
    },
    // Name of the model
    "name" : {
    type : String,
    max : 255
    },
    // Description of model
    "desc" : {
    type : String,
    max : 2048 
    }
});

/**
  * Allow DB Operations on this collection
  **/
CollectionModel.allow({
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
