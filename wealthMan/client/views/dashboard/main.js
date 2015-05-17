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
        return CollectionModel.find().fetch();
    },
    "securities" : function() {
        return CollectionSecurity.find().fetch();
    },
    "isSelected" : function(v1, v2) {
        if (v1 == v2) {
            return true;
        }
        return false;
    }
});

Template.dashboardTemplate.events({
    'focusout input' : function() {
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
