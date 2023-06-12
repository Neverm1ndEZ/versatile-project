import { useState } from "react";
import { Modal, Button } from "rsuite";
import Tile1 from "../assets/tile img 1.png";
import Tile2 from "../assets/tile img 2.png";
import Tile3 from "../assets/tile img 3.png";
import Signal from "../assets/signal.png";
import Rectangle from "../assets/Rectangle.png";
import IMG1 from "../assets/liveImage.png";
import IMG2 from "../assets/liveImage2.png";
import "./Cards.css";
import SimpleImageSlider from "react-simple-image-slider";

const Cards = () => {
	const [showComponent, setShowComponent] = useState(false);
	const [open, setOpen] = useState(false);
	const [size, setSize] = useState();
	const [componentType, setComponentType] = useState("");

	const handleOpen = (value) => {
		setSize(value);
		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	const handleCLick = () => console.log("Button clicked");

	const LiveImageModalComponent = () => {
		return (
			<>
				<Modal size={size} open={open} onClose={handleClose}>
					<Modal.Header closeButton={false}>
						<Modal.Title style={HEADER_STYLES}>Live Image</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="gallery-container">
							<SimpleImageSlider
								width={850}
								height={450}
								images={images}
								showBullets={false}
								showNavs={true}
								style={{
									marginTop: "2rem",
									overflow: "hidden",
								}}
								className="image-slider"
							/>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	};

	const ApplicationModalComponent = () => {
		return (
			<>
				<Modal size={size} open={open} onClose={handleClose}>
					<Modal.Header closeButton={false}>
						<Modal.Title style={HEADER_STYLES}>Application</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="gallery-container">
							<SimpleImageSlider
								width={850}
								height={450}
								images={images}
								showBullets={false}
								showNavs={true}
								style={{
									marginTop: "2rem",
									overflow: "hidden",
								}}
							/>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	};

	const handleClickForComponent = (type) => {
		setShowComponent(true);
		setComponentType(type);
	};

	const HEADER_STYLES = {
		fontFamily: '"Quicksand"',
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "35px",
		lineHeight: "42px",
		letterSpacing: "0.06em",
		color: "#000000",
	};

	const specialBtn = {
		borderRadius: "50%",
		boxShadow: "0px 4px 34px 6px rgba(0, 0, 0, 0.25)",
		margin: "5px 10px",
	};

	const btnStyle = {
		borderRadius: "60px",
		background: "#83b9d3",
		border: "transparent",
		padding: "5px 30px",
		margin: "4px 4px",
		color: "#fff",
	};

	const images = [{ url: IMG1 }, { url: IMG2 }];

	const Data = [
		{
			id: 0,
			heading: "Tiles Title",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur. Nunc id nunc lacinia \n sed ut sed laoreet. Tempor netus vel cras dolor sit tellus.\n",
			size: `16' 55"`,
			type: "Marble",
			color: "Red",
			image: Tile1,
		},
		{
			id: 1,
			heading: "Tiles Title",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur. Nunc id nunc lacinia \n sed ut sed laoreet. Tempor netus vel cras dolor sit tellus.\n",
			size: `16' 55"`,
			type: "Marble",
			color: "Red",
			image: Tile2,
		},
		{
			id: 2,
			heading: "Tiles Title",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur. Nunc id nunc lacinia \n sed ut sed laoreet. Tempor netus vel cras dolor sit tellus.\n",
			size: `16' 55"`,
			type: "Marble",
			color: "Red",
			image: Tile3,
		},
	];

	return (
		<>
			{Data.map(({ id, heading, paragraph, size, type, color, image }) => {
				return (
					<div key={id} className="polaroid">
						<img
							src={image}
							alt="Tile Image"
							style={{ width: "100%" }}
							className="item-image"
						/>
						<div className="text-container">
							<div className="heading-btn__container">
								<h3>{heading}</h3>
								<Button
									style={specialBtn}
									onClick={() => {
										handleOpen("lg");
										handleClickForComponent("LiveImage");
									}}
									id="specialBtn-Signal"
								>
									<img className="btn-image-signal" src={Signal} alt="Signal" />
								</Button>
								{showComponent && componentType === "LiveImage" && (
									<LiveImageModalComponent />
								)}
								{"  "}
							</div>
							<div className="paragraph-btn__container">
								<p>{paragraph}</p>
								<Button
									style={specialBtn}
									onClick={() => {
										handleOpen("lg");
										handleClickForComponent("Application");
									}}
									id="specialBtn-Rectangle"
								>
									<img
										className="btn-image-rectangle"
										src={Rectangle}
										alt="Rectangle"
									/>
								</Button>
								{showComponent && componentType === "Application" && (
									<ApplicationModalComponent />
								)}
							</div>
							<div className="btn-container">
								<Button style={btnStyle} onClick={handleCLick}>
									{size}
								</Button>
								<Button style={btnStyle} onClick={handleCLick}>
									{type}
								</Button>
								<Button style={btnStyle} onClick={handleCLick}>
									{color}
								</Button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Cards;
