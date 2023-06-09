import "./Page.css";
import Tile from "../assets/image.png";
import { Link } from "react-router-dom";

const Page = () => {
	const handleClick = (event) => {
		console.log("The button has been clicked " + event.target.value);
	};

	return (
		<div className="body">
			<div className="image">
				<img src={Tile} alt="Tile Image" style={{ borderRadius: "20px" }} />
			</div>
			<div className="choices">
				<div className="page_one-items">
					<div>
						<h2>Size</h2>
						<div className="btns-container">
							<Link to="/tiles">
								<input
									type="radio"
									id="option1"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
									className="page-one-btns"
								/>
								<label htmlFor="option1" className="page-one-label">
									16&apos; 55&quot;
								</label>

								<input
									type="radio"
									id="option2"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option2">16&apos; 55&quot;</label>
								<input
									type="radio"
									id="option3"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option3">16&apos; 55&quot;</label>
								<input
									type="radio"
									id="option4"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option4">16&apos; 55&quot;</label>
								<input
									type="radio"
									id="option5"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option5">16&apos; 55&quot;</label>
								<input
									type="radio"
									id="option6"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option6">16&apos; 55&quot;</label>
								<input
									type="radio"
									id="option7"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option7">16&apos; 55&quot;</label>
								<input
									type="radio"
									id="option8"
									name="options-size"
									value="16' 55&quot;"
									onClick={handleClick}
								/>
								<label htmlFor="option8">16&apos; 55&quot;</label>
							</Link>
						</div>
					</div>

					<div>
						<h2>Surface Finish</h2>
						<div className="btns-container">
							<input
								type="radio"
								id="option9"
								name="options-finish"
								value="Slate"
								onClick={handleClick}
							/>
							<label htmlFor="option9">Slate</label>
							<input
								type="radio"
								id="option10"
								name="options-finish"
								value="Granite"
								onClick={handleClick}
							/>
							<label htmlFor="option10">Granite</label>
							<input
								type="radio"
								id="option11"
								name="options-finish"
								value="Marble"
								onClick={handleClick}
							/>
							<label htmlFor="option11">Marble</label>
						</div>
					</div>

					<div>
						<h2>Colour</h2>
						<div className="btns-container">
							<input
								type="radio"
								id="option12"
								name="options-color"
								value="Red"
								onClick={handleClick}
							/>
							<label htmlFor="option12">Red</label>
							<input
								type="radio"
								id="option13"
								name="options-color"
								value="Green"
								onClick={handleClick}
							/>
							<label htmlFor="option13">Green</label>
							<input
								type="radio"
								id="option14"
								name="options-color"
								value="Gray"
								onClick={handleClick}
							/>
							<label htmlFor="option14">Gray</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
