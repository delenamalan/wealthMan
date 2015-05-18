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

var activeModel;
var previousSec;
var previousPerc;

Template.dashboardTemplate.helpers({
    "models" : function() {
        var models = CollectionModel.find().fetch();
        return models;
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
    'keypress input' : function(e, t) {
        if (e.keyCode == 13) { // Enter key was pressed
            e.target.blur(); // Remove focus from field
        }
    },
    'focusout .sec-name' : function(e, t) {
        CollectionSecurity.update({"_id" : this._id}, {$set : {
        name : $(e.target).val() }});
    },
    'focusout .sec-desc' : function(e, t) {
        CollectionSecurity.update({"_id" : this._id}, {$set : {
        desc : $(e.target).val() }});
    },
    'focusout .sec-price' : function(e, t) {
        var newPrice = Math.round($(e.target).val()*100)/100.0;
        CollectionSecurity.update({"_id" : this._id}, {$set : {
        price : newPrice }});
        $(e.target).val = newPrice;
    },
    'focusout .mod-name' : function(e, t) {
        CollectionModel.update({"_id" : this._id}, {$set : {
        name : $(e.target).val() }});
    },
    'focusout .mod-desc' : function(e, t) {
        CollectionModel.update({"_id" : this._id}, {$set : {
        desc : $(e.target).val() }});
    },
    'click #add-security' : function(e, t) {
        e.preventDefault();
        var newSecurity = {
           "_user" : Meteor.userId(),
           "name" : "Security Name",
           "desc" : "Security Description",
           "price" : 0.00
        };
        CollectionSecurity.insert(newSecurity);
        return false;
    },
    'click #add-sec-model' : function(e, t) {
        e.preventDefault();
        var newSecurity = {
            "_security" : CollectionModel.findOne()._id,
            "perc" : 0.00
        };
        CollectionModel.update({"_id" : this._id}, {$push : { "_modelSecurities"
        : newSecurity}});
        return false;
    },
    'click .delete-security' : function(e, t) {
        e.preventDefault();
        CollectionSecurity.remove({ _id : this._id});
        return false;
    },
    'click .delete-model' : function(e, t) {
        e.preventDefault();
        CollectionModel.remove({ _id : this._id});
        return false;
    },
    'click .delete-sec-model' : function(e, t) {
        e.preventDefault();
        CollectionModel.update({_id : activeModel
        }, {$pull : { _modelSecurities : { _security : this._security}}});
        return false;
    },
    'click #add-model' : function (e, t) {
        e.preventDefault();
        console.log("add model");
        var newModel = {
            "_user" : Meteor.userId(),
            "name" : "Model Name",
            "desc" : "Model Description",
            "_modelSecurities" : []
        };
        CollectionModel.insert(newModel);
        return false;
    },
    'focus .sec-select' : function(e, t) {
        previousSec = $(e.target).val();
    },
    'change .sec-select' : function(e, t) {
        var perc = $(".perc-" + activeModel).val();
        var newSec = this._id;
        Meteor.call("incrementSecurity", activeModel, previousSec, perc);
        if (CollectionModel.find({ _id : activeModel,
        "_modelSecurities._security" : newSec}).length == 0) {
            var newSecurity = {
                "_security" : newSec,
                "perc" : 0.00
            };
            CollectionModel.update({"_id" : this._id}, {$push : { "_modelSecurities"
            : newSecurity}});
        }
        Meteor.call("incrementSecurity", activeModel, newSec, perc);
    },
    'focus .perc': function(e, t) {
        previousPerc = $(e.target).val();
    },
    'focusout .perc' : function(e, t) {
        var newPerc = $(".perc-" + activeModel).val();
        var newSec = this._id;
        Meteor.call("incrementSecurity", activeModel, newSec, newPerc -
        previousPerc);
    },
	'click .sec-chevron' : function(e, t) {
        activeModel = this._id;
        var alreadyOpen = ($("." + this._id +
        "-secs").hasClass("active-row"));
        $(".model-secs-div").removeClass("active-row");
        $(".sec-chevron")
			.removeClass("fa-chevron-down").addClass("fa-chevron-right");
        if (!alreadyOpen) {
            $("." + this._id + "-secs").addClass("active-row");
            $("." + this._id + "-chevron")
                .removeClass("fa-chevron-right").addClass("fa-chevron-down");
        }
	}
});


/**
  * EOF
  **/
