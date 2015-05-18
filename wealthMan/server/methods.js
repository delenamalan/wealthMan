/**
  * Wealth Man
  * 
  * Location:	
  *	server/methods.js
  *
  * Description:
  * Meteor collection methods.
  *
  * Author:
  * Delena Malan
  *
  * @module 
  **/
Log.info( Level, "server/methods.js" );

Meteor.methods({
    // Method to increment the percentage value of a security in a model
    incrementSecurity: function (modelId, securityId, perc) {
        CollectionModel.update({_id : modelId, "_modelSecurities._security"
        : securityId}, {$inc : { "_modelSecurities.perc" : -1 * perc }},
            function (error, affectedDocs) {
                if (error) {
                    throw new Meteor.Error(500, error.message);
                } else {
                    console.log("success");
                }
            });
    }
});


/**
  * EOF
  **/
