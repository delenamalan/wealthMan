/**
 * CS 334 - Final Project
 *	Restaurant Perfect
 * 
 * Location:	
 *	client/views/register/main.js
 *
 * Description:
 *
 * Authors:
 *	Rudolf Byker	- 17973340@sun.ac.za
 *	Chris Malan		- 16187288@sun.ac.za
 *	Deléna Malan	- 17524695@sun.ac.za
 *	Andrew Polly	- 17252369@sun.ac.za
 *	Robert Sandell	- 16726723@sun.ac.za
 *	David Schwartz	- 17303184@sun.ac.za
 *
 **/
Log.info( Level, "client/views/register/main.js" );


Template.registerTemplate.helpers({
});


Template.registerTemplate.events({
	'submit form': function( e, t ) {
	    var email = t.$("#register-email").val().trim();
	    var pass = t.$("#register-pass").val();
	
	    e.preventDefault();
	    
	    Accounts.createUser({
		email: "" + email,
		password: "" + pass
	    },
	    function ( e ) {
		if ( e ) {
		    Log.error( Level, [ "Error:", e ] );
		}
	    });
		// create a normal user account
		//if ($(event.target).find("#registerCheckbox").is(':checked')) {
				// Meteor.createUser({
				//   username: "", // requires either username or email at least to be populated
				//   email: "",
				//   password: "",
				//   profile: {
				//	restaurant: true,
				//	anyfields: ""
				//   }
				// },
				// function ( e ) {
				//   // If Error
				//   if ( e ) {
				//	Log.error( Level, [ "Error:", e ] );
				//	Notifications.error('title', 'message');
				//   } else {
				//	CollectionRestaurant.insert({ 
				//	    name: "",
				//	    pos: {
				//		lat: "",
				//		lng: ""
				//	    },
				//	    placesid: "",
				//	    _user: "",
				//	    pics: [
				//		"url",
				//		"url"
				//	    ],
				//	    description: ""
				//	}, function ( e, id ) {
				//	    if ( !e ) {
				//		Notifications.success('Success', 'message');
				//	    } else {
				//		Log.error( Level, [ "Error:", e ] );
				//		Notifications.error('title', 'message - Unable to make into restaurant');
				//	    }
				//	});
				//    }
				// };
			//.} else {
				// register a normal user
				// TODO: db insert?
				// Meteor.createUser({
				//   username: "", // requires either username or email at least to be populated
				//   email: "",
				//   password: "",
				//   profile: {
				//	anyfields: ""
				//   }
				// },
				// function ( e ) {
				//   if ( e ) {
				//	Log.error( Level, [ "Error:", e ] );
				//   }
				// };
		//	}
		//}
		//
	
	Router.go( 'dashboard' );
		
	return false;
    }
});


/**
 * EOF
 **/
