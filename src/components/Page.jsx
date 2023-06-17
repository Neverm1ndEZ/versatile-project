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
							const sizeInputId = `size-${sizeData.id}`;
							return (
								<div className="btns-container" key={sizeData.id}>
									<input
										type="radio"
										id={sizeInputId}
										name="size"
										value={sizeData.size}
										checked={selectedSize === sizeData.size} // check if it's selected
										onChange={handleClick} // use onChange instead of onClick
									/>
									<label htmlFor={sizeData.id}>{sizeData.size}</label>
								</div>
							);
						})}
					</div>

					<div>
						<h2>Surface Finish</h2>
						{surfaceFinishDataFetched.map((surfaceData) => {
							const surfaceFinishInputId = `surface-${surfaceData.id}`;
							return (
								<div className="btns-container" key={surfaceData.id}>
									<input
										type="radio"
										id={surfaceFinishInputId}
										name="surface"
										value={surfaceData.surface_finish}
										checked={selectedSurface === surfaceData.surface_finish} // check if it's selected
										onChange={handleClick} // use onChange instead of onClick
									/>
									<label htmlFor={surfaceData.id}>
										{surfaceData.surface_finish}
									</label>
								</div>
							);
						})}
					</div>

					<div>
						<h2>Colour</h2>
						{colorDataFetched.map((colorData) => {
							const colorInputId = `color-${colorData.id}`;
							return (
								<div className="btns-container" key={colorData.id}>
									<input
										type="radio"
										id={colorInputId}
										name="color"
										value={colorData.color}
										checked={selectedColor === colorData.color} // check if it's selected
										onChange={handleClick} // use onChange instead of onClick
									/>
									<label htmlFor={colorData.id}>{colorData.color}</label>
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
