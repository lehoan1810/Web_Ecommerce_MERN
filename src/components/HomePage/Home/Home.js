import React from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import "./home.css";
const Home = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default Home;
