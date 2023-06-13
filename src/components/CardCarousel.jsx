import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IMG1 from "../assets/liveImage2.png";
import IMG2 from "../assets/liveImage2.png";
import "./Cards.css";

const CardCarousel = () => {
	const images = [
		{
			id: 0,
			image: IMG1,
		},
		{
			id: 1,
			image: IMG2,
		},
	];
	return (
		<div className="carousel-wrapper">
			<Carousel
				swipeable
				showStatus={false}
				showIndicators={false}
				dynamicHeight
				showThumbs={false}
			>
				{images.map(({ id, image }) => {
					return (
						<div key={id}>
							<img src={image} style={{ width: "100%" }} />
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default CardCarousel;
