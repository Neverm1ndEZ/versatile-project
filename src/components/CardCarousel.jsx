import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import IMG1 from "../assets/liveImage2.png";
// import IMG2 from "../assets/liveImage2.png";
import "./Cards.css";

const CardCarousel = () => {
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

	return (
		<div className="carousel-wrapper">
			<Carousel
				swipeable
				showStatus={false}
				showIndicators={false}
				dynamicHeight
				showThumbs={false}
			>
				{tileDataFetched.map((tileData) => {
					return (
						<div key={tileData.live_images.id}>
							<img
								src={tileData.live_images.images}
								style={{ width: "100%" }}
							/>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default CardCarousel;
