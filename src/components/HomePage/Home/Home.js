import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
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
