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

Meteor.publish("userModels", function(userId) {
    return CollectionModel.find({"_user" : userId});
});

Meteor.publish("userSecurities", function(userId) {
    return CollectionSecurity.find({"_user" : userId});
});


/**
  * EOF
  **/
