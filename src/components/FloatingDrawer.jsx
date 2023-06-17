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

	const [selectedSize, setSelectedSize] = useState("");
	const [selectedSurface, setSelectedSurface] = useState("");
	const [selectedColor, setSelectedColor] = useState("");

	const handleClick = (event) => {
		const { name, value } = event.target;

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

	const [dataFetched, setDataFetched] = useState(false);
	const [colorDataFetched, setColorDataFetched] = useState([]);
	const [sizeDataFetched, setSizeDataFetched] = useState([]);
	const [surfaceFinishDataFetched, setSurfaceFinishDataFetched] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const colorResponse = await axios.get(
					"https://versatileslab.com/apis/admin_api/get_color.php",
				);
				setColorDataFetched(colorResponse.data.data);

				const sizeResponse = await axios.get(
					"http://versatileslab.com/apis/admin_api/get_size.php",
				);
				setSizeDataFetched(sizeResponse.data.data);

				const surfaceFinishResponse = await axios.get(
					"http://versatileslab.com/apis/admin_api/get_surface_finishes.php",
				);
				setSurfaceFinishDataFetched(surfaceFinishResponse.data.data);

				setDataFetched(true);
			} catch (error) {
				console.log(error.response.data);
			}
		};

		if (!dataFetched) {
			fetchData();
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

						<div>
							<h2 className="middle_heading">Surface Finish</h2>
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

						<div>
							<h2 className="right_heading">Colour</h2>
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
				</Drawer.Body>
			</Drawer>
		</>
	);
};

export default FloatingDrawer;
