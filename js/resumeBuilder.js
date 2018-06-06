/*
This is empty on purpose! Your code to build the resume will go here.
 */


/*======= Model =======*/
 const bio = {
 	name: 'Vlad Sivirin',
 	role: 'Web Developer',

 	contacts: {
 		mobile: '+7(926)069-6055',
 		email: 'sivirin@gmail.com',
 		github: 'vladsivirin',
 		twitter: '@vlad_sivirin',
 		location: 'Moscow'
 	},

 	welcomeMessage: 'Hi, welcome!',
 	skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Linux'],
 	biopic: 'images/fry.jpg'
 	// display: function() {

 	// }
 };

/*======= Octopus =======*/
 const octopus = {
 	init: function() {
 		viewBio.init();
 	}
 };

 const viewBio = {
 	init: function() {
 		this.headerElem = $('#header');
 		this.topContacts = $('.flex-box');

 		this.render();
 	},

 	render: function() {
 		const formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
 		const formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
 		const formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 		const formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 		const formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 		const formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 		const formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 		const formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 		const formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

 		this.headerElem.prepend(formattedHeaderRole);
 		this.headerElem.prepend(formattedHeaderName);
 		this.topContacts.append(formattedMobile);
 		this.topContacts.append(formattedEmail);
 		this.topContacts.append(formattedGithub);
 		this.topContacts.append(formattedTwitter);
 		this.topContacts.append(formattedLocation);

 		this.headerElem.append(formattedBioPic);
 		this.headerElem.append(formattedWelcomeMsg);
 		this.headerElem.append(HTMLskillsStart);
 		this.skills = document.querySelector('#skills');

 		for(let i = 0; i < bio.skills.length; i++) {
 			let formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
 			this.skills.insertAdjacentHTML('beforeend', formattedSkills);
 		}
 	}
 };

 octopus.init();
