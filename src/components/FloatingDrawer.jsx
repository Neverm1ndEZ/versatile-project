import { Drawer, ButtonToolbar, IconButton } from "rsuite";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import { useState } from "react";
import "./FloatingDrawer.css";

const FloatingDrawer = () => {
	const [open, setOpen] = useState(false);
	const [placement, setPlacement] = useState();

	const handleOpen = (key) => {
		setOpen(true);
		setPlacement(key);
	};

	const handleClick = (event) => {
		console.log("The button has been clicked " + event.target.value);
	};

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
							<div className="selection-btns_drawer">
								<input
									type="radio"
									id="option1_drawer"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option1_drawer" className="select-label">
									16&apos; 55&quot;
								</label>
								<input
									type="radio"
									id="option2_drawer"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option2_drawer">16&apos; 55&quot;</label>
								<input
									type="radio"
									id="option3_drawer"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option3_drawer">16&apos; 55&quot;</label>
							</div>
						</div>

						<div>
							<h2 className="middle_heading">Surface Finish</h2>
							<div className="selection-btns_drawer">
								<input
									type="radio"
									id="option4_drawer"
									name="options-finish"
									value="Slate"
									onClick={handleClick}
								/>
								<label htmlFor="option4_drawer">Slate</label>
								<input
									type="radio"
									id="option5_drawer"
									name="options-finish"
									value="Granite"
									onClick={handleClick}
								/>
								<label htmlFor="option5_drawer">Granite</label>
								<input
									type="radio"
									id="option6_drawer"
									name="options-finish"
									value="Marble"
									onClick={handleClick}
								/>
								<label htmlFor="option6_drawer">Marble</label>
							</div>
						</div>

						<div>
							<h2 className="right_heading">Colour</h2>
							<div className="selection-btns_drawer">
								<input
									type="radio"
									id="option7_drawer"
									name="options-color"
									value="Red"
									onClick={handleClick}
								/>
								<label htmlFor="option7_drawer">Red</label>
								<input
									type="radio"
									id="option8_drawer"
									name="options-color"
									value="Green"
									onClick={handleClick}
								/>
								<label htmlFor="option8_drawer">Green</label>
								<input
									type="radio"
									id="option9_drawer"
									name="options-color"
									value="Gray"
									onClick={handleClick}
								/>
								<label htmlFor="option9_drawer">Gray</label>
							</div>
						</div>
					</div>
				</Drawer.Body>
			</Drawer>
		</>
	);
};

export default FloatingDrawer;
