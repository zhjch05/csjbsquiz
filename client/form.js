Template.form.events({
	'submit #mainform': function(event){
		event.preventDefault();
		var projectNameVar = event.target.projectname.value;
		var firstNameVar = event.target.firstname.value;
		var lastNameVar = event.target.lastname.value;
		var depProjectVar = event.target.depproject.value;
		var gitRepoVar = event.target.gitrepo.value;
		Profiles.insert({
			projectname: projectNameVar,
			firstname: firstNameVar,
			lastname: lastNameVar,
			depproject : depProjectVar,
			gitrepo: gitRepoVar
		});

	}
});