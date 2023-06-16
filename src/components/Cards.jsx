import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "rsuite";
import Signal from "../assets/signal.png";
import Rectangle from "../assets/Rectangle.png";
import "./Cards.css";
import CardCarousel from "./CardCarousel";

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
							<CardCarousel />
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
							<CardCarousel />
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

	const [dataFetched, setDataFetched] = useState(false); // to control re-fetching of data

	const [tileDataFetched, setTileDataFetched] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const tileResponse = await axios.get(
					"http://versatileslab.com/apis/admin_api/get_tiles.php",
				);
				setTileDataFetched(tileResponse.data.data);
			} catch (error) {
				console.log(error.response.data);
			}
		};

		if (!dataFetched) {
			fetchData();
			setDataFetched(true);
		}
	}, [dataFetched]);

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

	return (
		<>
			{tileDataFetched.map((tileData) => {
				return (
					<div key={tileData.id} className="polaroid">
						<img
							src={tileData.thumbnail_image}
							alt="Tile Image"
							style={{ width: "100%" }}
							className="item-image"
						/>
						<div className="text-container">
							<div className="heading-btn__container">
								<h3>{tileData.tile_title}</h3>
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
								<p>{tileData.tile_desc}</p>
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
								{tileData.tile_size.map((size) => (
									<Button key={size.id} style={btnStyle} onClick={handleCLick}>
										{size.size}
									</Button>
								))}
								<Button style={btnStyle} onClick={handleCLick}>
									{tileData.surface_finish}
								</Button>
								<Button style={btnStyle} onClick={handleCLick}>
									{tileData.color}
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
