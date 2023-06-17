import "./Selection.css";
import { useState, useEffect, forwardRef } from "react";
import axios from "axios";

const Selection = forwardRef((props, ref) => {
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
		<>
			<div className="page_two-items">
				<div>
					<h2 className="left">Size</h2>
					{sizeDataFetched.map((sizeData) => {
						const sizeInputId = `size-${sizeData.id}`;
						return (
							<div className="selection-btns" key={sizeData.id}>
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

				<div className="vr" style={{ opacity: "1" }}></div>

				<div>
					<h2 className="middle">Surface Finish</h2>
					{surfaceFinishDataFetched.map((surfaceData) => {
						const surfaceFinishInputId = `surface-${surfaceData.id}`;
						return (
							<div className="selection-btns" key={surfaceData.id}>
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

				<div className="vr" style={{ opacity: "1" }}></div>

				<div>
					<h2 className="right">Colour</h2>
					{colorDataFetched.map((colorData) => {
						const colorInputId = `color-${colorData.id}`;
						return (
							<div className="selection-btns" key={colorData.id}>
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
		</>
	);
});

Selection.displayName = "Selection";

export default Selection;
