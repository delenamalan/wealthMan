/**
  * WealthMan
  * 
  * Location:	
  *	client/views/dashboard/main.js
  *
  * Description:
  * Helpers and events for the dashboard template.
  *
  * Author:
  *	Delena Malan
  *
  **/
Log.info( Level, "client/views/dashboard/main.js" );

var activeModel;

var unusedSecurities = function(modelId) {
        var unusedSecs = [];
        var secs = CollectionSecurity.find().fetch();
        for (var i = 0; i < secs.length; i++) {
            if (CollectionModelSecurity.find({ "_model" : modelId, "_security" :
            secs[i]._id}).fetch().length == 0) {
                unusedSecs.push(CollectionSecurity.findOne({"_id" :
                secs[i]._id}));
            }
        }
        return unusedSecs;
};

Template.dashboardTemplate.helpers({
    "models" : function() {
        var models = CollectionModel.find().fetch();
        return models;
    },
    "securities" : function() {
        return CollectionSecurity.find().fetch();
    },
    "modelSecurities" : function(modelId) {
        return CollectionModelSecurity.find({ "_model" : modelId}).fetch();
    },
    "unusedSecurities" : function(modelId) {
        return unusedSecurities(modelId);
    },
    "unusedCurrentSecurities" : function(modelId) {
        var unused = unusedSecurities(modelId);
        unused.push(CollectionSecurity.findOne({
        "_id" : this._security}));
        return unused;
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
        e.target.value = newPrice;
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
        var newModelSecurity = {
            "_user" : Meteor.userId(),
            "_model" : this._id,
            "_security" : unusedSecurities(this._id)[0]._id,
            "perc" : 0.00
        };
        CollectionModelSecurity.insert(newModelSecurity);
        return false;
    },
    'click .delete-security' : function(e, t) {
        e.preventDefault();
        CollectionSecurity.remove({ _id : this._id});
        Meteor.call("deleteSecurity", this._id);
        return false;
    },
    'click .delete-model' : function(e, t) {
        e.preventDefault();
        CollectionModel.remove({ _id : this._id});
        return false;
    },
    'click .delete-sec-model' : function(e, t) {
        e.preventDefault();
        CollectionModelSecurity.remove({ _id : this._id});
        return false;
    },
    'click #add-model' : function (e, t) {
        e.preventDefault();
        var newModel = {
            "_user" : Meteor.userId(),
            "name" : "Model Name",
            "desc" : "Model Description"
        };
        CollectionModel.insert(newModel);
        return false;
    },
    'focus .sec-select' : function(e, t) {
        previousSec = $(e.target).val();
    },
    'change .sec-select' : function(e, t) {
        CollectionModelSecurity.update({"_id" : this._id}, {$set : {_security :
        $(e.target).val()}});
    },
    'focusout .perc' : function(e, t) {
        var newPerc = Math.round($(e.target).val()*100)/100.0;
        e.target.value = newPerc;
        CollectionModelSecurity.update({"_id" : this._id}, {$set : {
        perc : newPerc }});
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
