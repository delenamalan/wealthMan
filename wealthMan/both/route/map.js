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
    // layout: '',	// layout specified on a per controller basis
    loadingTemplate:	'loading',
    notFoundTemplate:	'notFound'
});



Router.map( function () {
    this.route( 'index', {
	path: '/',
	name: 'index',
	controller: 'ControllerHome'
    });
    
    this.route( 'about', {
	path: '/about',
	name: 'about',
	controller: 'ControllerAbout'
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

