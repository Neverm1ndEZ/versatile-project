import "./Selection.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Selection = () => {
	const handleClick = (event) => {
		console.log("The button has been clicked " + event.target.value);
	};

	const [dataFetched, setDataFetched] = useState(false); // to control re-fetching of data

	const [colorDataFetched, setColorDataFetched] = useState([]);
	const [sizeDataFetched, seSizeDataFetched] = useState([]);
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
					.then((sizeResponse) => seSizeDataFetched(sizeResponse.data.data));

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
						const { id, size } = sizeData;
						return (
							<div className="selection-btns" key={id}>
								<input
									type="radio"
									id={id}
									name={size}
									value={size}
									onClick={handleClick}
								/>
								<label htmlFor={id}>{size}</label>
							</div>
						);
					})}
				</div>

				<div className="vr" style={{ opacity: "1" }}></div>

				<div>
					<h2 className="middle">Surface Finish</h2>
					{surfaceFinishDataFetched.map((surfaceData) => {
						const { id, surface_finish } = surfaceData;
						return (
							<div className="selection-btns" key={id}>
								<input
									type="radio"
									id={id}
									name={surface_finish}
									value={surface_finish}
									onClick={handleClick}
								/>
								<label htmlFor={id}>{surface_finish}</label>
							</div>
						);
					})}
				</div>

				<div className="vr" style={{ opacity: "1" }}></div>

				<div>
					<h2 className="right">Colour</h2>
					{colorDataFetched.map((colorData) => {
						const { id, color } = colorData;
						return (
							<div className="selection-btns" key={id}>
								<input
									type="radio"
									id={id}
									name={color}
									value={color}
									onClick={handleClick}
								/>
								<label htmlFor={id}>{color}</label>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default Selection;
