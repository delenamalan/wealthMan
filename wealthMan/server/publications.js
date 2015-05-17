/**
  * WealthMan
  * 
  * Location:	
  *	server/publications.js
  *
  * Description:
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "server/publications.js" );

Meteor.publish("userModel", function(userId) {
    return CollectionModel.find({"_user" : userId});
});

Meteor.publish("userSecurity", function(userId) {
    return CollectionSecurity.find({"_user" : userId});
});


/**
  * EOF
  **/
