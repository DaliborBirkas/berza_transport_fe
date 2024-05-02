import { useRef } from "react";
import { FaBars, FaTimes, faTruck } from "react-icons/fa";
import "../Styles/main.css";
import logo from '../assets/images/slider1.jpg';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3><i>Transport Helper</i></h3>
			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/about">About</a>
				<a href="/contact">Contact</a>
                <a href=""> Sign in</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;