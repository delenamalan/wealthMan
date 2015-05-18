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
    // Method to delete all model-security pairs when a security is deleted.
    deleteSecurity : function (securityId) {
        CollectionModelSecurity.remove({ _security : securityId});
    }
});


/**
  * EOF
  **/
