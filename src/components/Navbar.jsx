import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav class="navbar navbar-dark bg-primary mb-3">
		<div class="container">
			<NavLink to="/" style={{color:'white',textDecoration:"none"}}>WikiCountries</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
