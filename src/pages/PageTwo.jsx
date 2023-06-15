import Nav from "../components/Nav";
import Selection from "../components/Selection";
import Cards from "../components/Cards";
import FloatingDrawer from "../components/FloatingDrawer";

const PageTwo = () => {
	return (
		<>
			<Nav />
			<Selection />
			<FloatingDrawer styles={{ position: "fixed", zIndex: "1" }} />
			<Cards />
		</>
	);
};

export default PageTwo;
