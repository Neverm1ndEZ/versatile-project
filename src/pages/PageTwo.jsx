import Nav from "../components/Nav";
import Selection from "../components/Selection";
import Cards from "../components/Cards";
import FloatingDrawer from "../components/FloatingDrawer";
import { useState, useEffect, useRef, forwardRef } from "react";

const PageTwo = () => {
	const [showFloatingDrawer, setShowFloatingDrawer] = useState(false);
	const selectionRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const selectionOffset = selectionRef.current?.offsetTop || 0;
			const scrollPosition = window.scrollY;

			if (scrollPosition > selectionOffset) {
				setShowFloatingDrawer(true);
			} else {
				setShowFloatingDrawer(false);
			}
		};

		const timeout = setTimeout(() => {
			if (selectionRef.current) {
				handleScroll();
			}
		}, 0);

		window.addEventListener("scroll", handleScroll);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Nav />
			<Selection ref={selectionRef} />
			{showFloatingDrawer && (
				<FloatingDrawer
					styles={{ zIndex: "999", position: "sticky", top: 0 }}
				/>
			)}
			<Cards />
		</>
	);
};

export default PageTwo;
