Template.maintable.helpers({
	proj: function(){
		return Profiles.find({},{sort: {projectname: 1, firstname: 1, lastname: 1}});
	}
});

Template.maintablerow.events({
	'click .jbs-quiz-del': function(){Profiles.remove(this._id);}
})