import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Nav = () => {
	return (
		<div className="navbar">
			<Link to="/" className="catalogue-btn">
				<div className="logo">
					<img src={Logo} alt="Versatile Logo" className="navbar_img" />
				</div>
			</Link>
			<Link to="/catalogue" className="catalogue-btn">
				<div className="text">CATALOGUE</div>
			</Link>
		</div>
	);
};

export default Nav;
