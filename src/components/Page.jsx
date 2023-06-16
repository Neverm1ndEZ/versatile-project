import "./Page.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Tile from "../assets/image.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Page = () => {
	const [selectedSize, setSelectedSize] = useState(""); // state for selected size
	const [selectedSurface, setSelectedSurface] = useState(""); // state for selected surface finish
	const [selectedColor, setSelectedColor] = useState(""); // state for selected color

	const handleClick = (event) => {
		const { name, value } = event.target;

		// Update the selected state based on the group of buttons clicked
		switch (name) {
			case "size":
				setSelectedSize(value);
				break;
			case "surface":
				setSelectedSurface(value);
				break;
			case "color":
				setSelectedColor(value);
				break;
			default:
				break;
		}
	};

	const [dataFetched, setDataFetched] = useState(false); // to control re-fetching of data
	const [colorDataFetched, setColorDataFetched] = useState([]);
	const [sizeDataFetched, setSizeDataFetched] = useState([]);
	const [surfaceFinishDataFetched, setSurfaceFinishDataFetched] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			try {
				axios
					.get("https://versatileslab.com/apis/admin_api/get_color.php")
					.then((colorResponse) =>
						setColorDataFetched(colorResponse.data.data),
					);

				axios
					.get("http://versatileslab.com/apis/admin_api/get_size.php")
					.then((sizeResponse) => setSizeDataFetched(sizeResponse.data.data));

				axios
					.get(
						"http://versatileslab.com/apis/admin_api/get_surface_finishes.php",
					)
					.then((surfaceFinishResponse) =>
						setSurfaceFinishDataFetched(surfaceFinishResponse.data.data),
					);
			} catch (error) {
				console.log(error.response.data);
			}
		};

		if (!dataFetched) {
			fetchData();
			setDataFetched(true);
		}
	}, [dataFetched]);

	return (
		<div className="body">
			<div className="column image-column">
				<Link to="/tiles">
					<Button variant="outline-dark" id="overlay-button">
						See Tiles
					</Button>
				</Link>
				<img
					src={Tile}
					alt="Tile Image"
					style={{ borderRadius: "20px" }}
					className="image-mobile"
				/>
			</div>
			<div className="column choices-column">
				<div className="page_one-items">
					<div>
						<h2>Size</h2>
						{sizeDataFetched.map((sizeData) => {
							const { id, size } = sizeData;
							return (
								<div className="btns-container" key={id}>
									<input
										type="radio"
										id={id}
										name="size"
										value={size}
										checked={selectedSize === size} // check if it's selected
										onChange={handleClick} // use onChange instead of onClick
									/>
									<label htmlFor={id}>{size}</label>
								</div>
							);
						})}
					</div>

					<div>
						<h2>Surface Finish</h2>
						{surfaceFinishDataFetched.map((surfaceData) => {
							const { id, surface_finish } = surfaceData;
							return (
								<div className="btns-container" key={id}>
									<input
										type="radio"
										id={id}
										name="surface"
										value={surface_finish}
										checked={selectedSurface === surface_finish} // check if it's selected
										onChange={handleClick} // use onChange instead of onClick
									/>
									<label htmlFor={id}>{surface_finish}</label>
								</div>
							);
						})}
					</div>

					<div>
						<h2>Colour</h2>
						{colorDataFetched.map((colorData) => {
							const { id, color } = colorData;
							return (
								<div className="btns-container" key={id}>
									<input
										type="radio"
										id={id}
										name="color"
										value={color}
										checked={selectedColor === color} // check if it's selected
										onChange={handleClick} // use onChange instead of onClick
									/>
									<label htmlFor={id}>{color}</label>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
