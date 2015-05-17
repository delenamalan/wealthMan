/**
  * WealthMan
  * 
  * Location:	
  *	client/views/dashboard/main.js
  *
  * Description:
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "client/views/dashboard/main.js" );


Template.dashboardTemplate.helpers({
    "models" : function() {
        var models = [];

        // TODO subscribe to user's models
        models = [{name : "model 1", desc: "slfkjs laskfj", secs :
        [{"_security" : "1234", perc : 20}, {"_security" :
        "5678", perc : 35}, {"_security" : "689", perc :
        45}]},{name : "model 2", desc: "slf ss kjs laskfj", secs :
        [{"_security" : "1234", perc : 50}, {"_security" :
        "5678", perc : 35}, {"_security" : "246", perc : 25}]}];

        return models;
    },
    "securities" : function() {
        var securities = [];

        // TODO: Subscribe to user's securites
        securities = [{"_id" : "1234", name : "cool security",  desc : "bala asldasdlash",
        price : 20.00}, {"_id" : "5678", name : "sasfasf", desc : " aslkasdk askdlalsd", price:
        100},{"_id" : "246", name : "security 101",  desc : "bala asldasdlash",
        price : 20.00}, {"_id" : "689", name : "bloep", desc : " wdaskdlalsd", price:
        100}];

        return securities;
    },
    "isSelected" : function(v1, v2) {
        console.log(v1 + " " + v2);
        if (v1 == v2) {
            console.log("true!");
            return true;
        }
        return false;
    }
});

Template.dashboardTemplate.events({
    'focusout input' : function() {
        console.log("focus out!");
    },
    'keypress input' : function(e, t) {
        if (e.keyCode == 13) { // Enter key was pressed
            e.target.blur();
        }
    },
    'click #add-security' : function(e, t) {
        e.preventDefault();
        // TODO: Insert new security into collection
        return false;
    },
    'click .delete-security' : function(e, t) {
        e.preventDefault();
        // TODO: Delete security from collection
        return false;
    },
	'click .model-row' : function() {
		$(".uk-accordion-title.uk-active .sec-chevron")
			.removeClass("fa-chevron-right").addClass("fa-chevron-down");
		$(".uk-accordion-title:not(.uk-active) .sec-chevron")
			.removeClass("fa-chevron-down").addClass("fa-chevron-right");
	}
});


/**
  * EOF
  **/
