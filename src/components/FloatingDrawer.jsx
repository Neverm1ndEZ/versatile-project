import { Drawer, ButtonToolbar, IconButton } from "rsuite";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import { useState, useEffect } from "react";
import axios from "axios";
import "./FloatingDrawer.css";

const FloatingDrawer = () => {
	const [open, setOpen] = useState(false);
	const [placement, setPlacement] = useState();

	const handleOpen = (key) => {
		setOpen(true);
		setPlacement(key);
	};

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
			<ButtonToolbar>
				<IconButton icon={<AngleLeftIcon />} onClick={() => handleOpen("left")}>
					Customize Your Tile
				</IconButton>
			</ButtonToolbar>

			<Drawer
				size="sm"
				placement={placement}
				open={open}
				onClose={() => setOpen(false)}
			>
				<Drawer.Header>
					<Drawer.Title>Choose Your Finish</Drawer.Title>
				</Drawer.Header>
				<Drawer.Body>
					<div className="page_two-items_drawer">
						<div>
							<h2 className="left_heading">Size</h2>
							{sizeDataFetched.map((sizeData) => {
								const { id, size } = sizeData;
								return (
									<div className="selection-btns_drawer" key={id}>
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
							<h2 className="middle_heading">Surface Finish</h2>
							{surfaceFinishDataFetched.map((surfaceData) => {
								const { id, surface_finish } = surfaceData;
								return (
									<div className="selection-btns_drawer" key={id}>
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
							<h2 className="right_heading">Colour</h2>
							{colorDataFetched.map((colorData) => {
								const { id, color } = colorData;
								return (
									<div className="selection-btns_drawer" key={id}>
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
				</Drawer.Body>
			</Drawer>
		</>
	);
};

export default FloatingDrawer;
