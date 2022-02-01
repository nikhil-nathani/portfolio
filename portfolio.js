import emoji from "react-easy-emoji";
import Images from "./Assets/Images"
export const greetings = {
	name: "Nikhil Nathani",
	title: "Hi, I'm Nikhil",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building applications with JavaScript / Reactjs / Nodejs / Python / Unity / React Native and other libraries and frameworks.",
	// resumeLink: "To Be Added",
};

export const openSource = {
	githubUserName: "nikhilnathani",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/nikhil.nathani.90/",
	instagram: "https://www.instagram.com/nikhilnathani/",
	twitter: "https://twitter.com/nikhilnathani",
	github: "https://github.com/nikhil-nathani",
	linkedin: "https://www.linkedin.com/in/nikhilnathani/",
};

export const skillsSection = {
	title: "Technologies",
	subTitle:
		"Since I was first interested in technology and branched out into coding and programming, I've always wanted to learn and adapt to new technologies.",
	skills: [
		// emoji(
		// 	"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		// ),
		// emoji(
		// 	"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		// ),
		// emoji(
		// 	"⚡ Integration of third party services such as Firebase/ AWS"
		// ),
	],

	softwareSkills: [
		{
			skillName: "HTML-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "SASS",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "Reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "React-Native",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "Nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "Unity",
			fontAwesomeClassname: "logos:unity",
		},
		{
			skillName: "Swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "NPM",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "SQL-Database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},

		{
			skillName: "AWS",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "Firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "Python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "logos:git-icon",
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "30",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
	{
		Stack: "Game Development",
		progressPercentage: "30",
	}
];

export const educationInfo = [
	{
		schoolName: "Taylor's University",
		subHeader: "Bachelor's in Information Technology",
		duration: "August 2018 - December 2021",
		desc: "Participated in projects, learnt different technologies along the way and developed an interest in game development",
		descBullets: [
			"CGPA of 3.3",
			"Developed a web application for the the Post Graduate Department to help accelerate their workflow",
		],
	},

];

export const experience = [

	{
		role: "Front End Intern",
		company: "Selleri",
		companylogo: "/img/icons/common/selleriLogo.png",
		date: "June 2021 – December 2021",
		desc: "Worked together with the software engineers, quality assurance engineers, and front end engineers. Expand features, refine code and improve processes, producing smoother operations and enhancing user engagement. Designing frontend within object-oriented Javascript frameworks like React.js and React Native.",
	},
	{
		role: "Junior Front End Developer",
		company: "Selleri",
		companylogo: "/img/icons/common/selleriLogo.png",
		date: "January 2022 – Present",
		desc: "Worked together with the software engineers, quality assurance engineers, and front end engineers. Expand features, refine code and improve processes, producing smoother operations and enhancing user engagement. Designing frontend within object-oriented Javascript frameworks like React.js and React Native.",
	},
];

export const projects = [
	{
		name: "Broken Brakes",
		desc: "My first attempt at a Unity game, I worked on the game after work hours and built it following various tutorials. I've always wanted to create an endless runner kind of game with it's own quirky gameplay.",
		link: "https://play.google.com/store/apps/details?id=com.lazy.BrokenBrakes",
		buttonText:"Download"
	},

];

export const certifications = [
	{
		name: "JavaScript Algorithms and Data Structures",
		link:
			"https://www.freecodecamp.org/certification/fcca071248a-2b19-441c-b6fd-faa7f1caf501/javascript-algorithms-and-data-structures",
			image:Images.freeCodeCamp,
	},
	{
		name:"The Fundamentals Of Digital Marketting",
		link:"https://drive.google.com/file/d/1sNN0c3CgU728bmP4EbU4WBZ53cQyYdsq/view?usp=sharing",
		image:Images.google,
	}

];
