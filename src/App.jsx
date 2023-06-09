import "./index.css";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/PageOne";
import Page2 from "./pages/PageTwo";
import Page3 from "./pages/PageThree";
// import CataloguePage from "./pages/CataloguePage";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Page1 />} />
				<Route path="/tiles" element={<Page2 />} />
				{/* <Route path="/catalogue" element={<CataloguePage /> && <Page3 />} /> */}
				<Route path="/catalogue" element={<Page3 />} />
			</Routes>
		</>
	);
};

export default App;
