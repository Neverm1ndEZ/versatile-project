import "./Catalogue.css";
import CardImage from "../assets/card_img.png";

const Catalogue = () => {
	const handleClickCards = () => console.log("Card clicked");

	const Data = [
		{
			id: 0,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
		{
			id: 1,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
		{
			id: 2,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
		{
			id: 3,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
		{
			id: 4,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
		{
			id: 5,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
		{
			id: 6,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
		{
			id: 7,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
		{
			id: 8,
			heading: "Abc catalogue for 4’33’’",
			description: "Abc catalogue for 4’33’’",
			image: CardImage,
		},
	];

	return (
		<>
			<div className="card__container" onClick={handleClickCards}>
				{Data.map(({ id, heading, description, image }) => {
					return (
						<div key={id} className="item">
							<div className="hero_item-image">
								<img
									src={image}
									alt="File Image"
									style={{ overflow: "hidden" }}
								/>
							</div>
							<h3>{heading}</h3>
							<p>{description}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Catalogue;
