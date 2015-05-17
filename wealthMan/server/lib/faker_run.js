var reset = process.env.FAKER;

if ( typeof( reset ) !== 'undefined' ) {
    Log.info( Level, "server/lib/faker_run.js" );

    /**
      * If Env Var is set generate new data post startup
      **/
    Meteor.startup( function () {

    /**
      * Default number of accounts to add
      **/
    var users = 10;

    /**
      * Creates User Object
      **/
    var addUser = function () {
            var eachUser = {};

        eachUser.email = Faker.Internet.email();
        eachUser.username = Faker.Internet.userName();
        eachUser.password = "pass";

        return eachUser;
    }

    CollectionModel.remove({});
    CollectionSecurity.remove({});	
    Meteor.users.remove({});

    console.log( "Test User" );
    try {
        var id = Accounts.createUser({
            'email': "test@email.com",
            'password': "password",
        });
    } catch ( e ) {
        Log.error( Level, [ "Error:", e ] );
    }

    for( var i = 0; i < users; i++ ) { 	
        try {
            var random = Math.random();
            var id = Accounts.createUser( addUser() );
        } catch ( e ) {
            Log.error( Level, [ "Error:", e ] );
        }
    }

    });
}
