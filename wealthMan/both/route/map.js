/**
  * WealthMan
  * 
  * Location:	
  *	both/route/map.js
  *
  * Description:
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "both/route/map.js" );


Router.configure({
    notFoundTemplate:	'notFound'
});



Router.map( function () {
    this.route( 'index', {
	path: '/',
	name: 'index',
	controller: 'ControllerHome'
    });
    
    this.route( 'register', {
	path: '/register',
	name: 'register',
	controller: 'ControllerRegister'
    });
    
    this.route( 'dashboard', {
	path: '/dashboard/:_id',
	name: 'dashboard',
	controller: 'ControllerDashboard'
    });

});


/**
  * EOF
  **/

