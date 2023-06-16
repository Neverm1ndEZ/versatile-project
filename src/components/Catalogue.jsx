import "./Catalogue.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardImage from "../assets/card_img.png";

const Catalogue = () => {
	const handleClickCards = () => console.log("Card clicked");

	const [dataFetched, setDataFetched] = useState(false); // to control re-fetching of data

	const [catalogueDataFetched, setCatalogueDataFetched] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const catalogueResponse = await axios.get(
					"http://versatileslab.com/apis/admin_api/get_catalogues.php",
				);
				setCatalogueDataFetched(catalogueResponse.data.data);
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
			<div className="card__container" onClick={handleClickCards}>
				{catalogueDataFetched.map((catalogueData) => {
					const { id, pdf_url, pdf_title, pdf_desc } = catalogueData;
					return (
						<a
							href={pdf_url}
							key={id}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="item">
								<div className="hero_item-image">
									<img
										src={CardImage}
										alt="File Image"
										style={{ overflow: "hidden" }}
									/>
								</div>
								<h3>{pdf_title}</h3>
								<p>{pdf_desc}</p>
							</div>
						</a>
					);
				})}
			</div>
		</>
	);
};

export default Catalogue;
