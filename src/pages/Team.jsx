import React from "react";
import Cards from "../components/Cards";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import { members } from "../data/teams";

const Team = () => {
	return (
		<Layout>
			<Topbar title={"Team"} />
			<Cards data={members} />
		</Layout>
	);
};

export default Team;
