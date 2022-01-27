import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Certifications = dynamic(() => import("../containers/Certifications"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Nikhil Nathani",
					description:
					"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building applications with JavaScript / Reactjs / Nodejs / Python / Unity / React Native and other libraries and frameworks.",
					image: "https://media-exp1.licdn.com/dms/image/D5635AQFOCXz5sGNpFg/profile-framedphoto-shrink_400_400/0/1642243769672?e=1643360400&v=beta&t=WAGaNgpnlvzagpnM7AbSKC40WNpPRPq867lMNyQuIks",
					url: "To be Added",
					keywords: [
						"Nikhil",
						"Nikhil Nathani",
						"@nikhilnathani",
						"nikhil-nathani",
						"Portfolio",
						"Nikhil Portfolio ",
						"Nikhil Nathani Portfolio",
						"web developer",
						"game developer",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"flutter",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Certifications />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
