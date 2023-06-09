import "./Selection.css";

const Selection = () => {
	const handleClick = (event) => {
		console.log("The button has been clicked " + event.target.value);
	};

	return (
		<>
			<div className="page_two-items">
				<div>
					<h2 className="left">Size</h2>
					<div className="selection-btns">
						<input
							type="radio"
							id="option1"
							name="options-size"
							value="16' 55&quot;"
							onClick={handleClick}
						/>
						<label htmlFor="option1" className="select-label">
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
					</div>
				</div>
				<div className="vr" style={{ opacity: "1" }}></div>
				<div>
					<h2 className="middle">Surface Finish</h2>
					<div className="selection-btns">
						<input
							type="radio"
							id="option4"
							name="options-finish"
							value="Slate"
							onClick={handleClick}
						/>
						<label htmlFor="option4">Slate</label>
						<input
							type="radio"
							id="option5"
							name="options-finish"
							value="Granite"
							onClick={handleClick}
						/>
						<label htmlFor="option5">Granite</label>
						<input
							type="radio"
							id="option6"
							name="options-finish"
							value="Marble"
							onClick={handleClick}
						/>
						<label htmlFor="option6">Marble</label>
					</div>
				</div>
				<div className="vr" style={{ opacity: "1" }}></div>
				<div>
					<h2 className="right">Colour</h2>
					<div className="selection-btns">
						<input
							type="radio"
							id="option7"
							name="options-color"
							value="Red"
							onClick={handleClick}
						/>
						<label htmlFor="option7">Red</label>
						<input
							type="radio"
							id="option8"
							name="options-color"
							value="Green"
							onClick={handleClick}
						/>
						<label htmlFor="option8">Green</label>
						<input
							type="radio"
							id="option9"
							name="options-color"
							value="Gray"
							onClick={handleClick}
						/>
						<label htmlFor="option9">Gray</label>
					</div>
				</div>
			</div>
		</>
	);
};
export default Selection;
