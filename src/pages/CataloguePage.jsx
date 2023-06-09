import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "rsuite";

const CataloguePage = () => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(true); // Set initial value of open to true

	const handleClose = () => {
		setOpen(false);
		navigate("/");
	};
	useEffect(() => {
		handleClose(); // Call handleClose to close the modal on page load
	}, []); // Empty dependency array to only run once on initial page load

	const HEADER_STYLES = {
		fontFamily: '"Quicksand"',
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "50px",
		lineHeight: "62px",
		letterSpacing: "0.06em",
		color: "#000000",
		textAlign: "center",
	};

	const P_STYLES = {
		fontFamily: '"Quicksand"',
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "19px",
		lineHeight: "24px",
		letterSpacing: "0.06em",
		color: "#000000",
	};

	const INPUT_STYLES = {
		margin: "0.5rem 0",
		padding: "1rem 9rem",
		border: "1px solid #000",
		borderRadius: "20px",
		textAlign: "center",
	};

	const BTN_STYLES = {
		border: "none",
		backgroundColor: "#367fb2",
		padding: "20px",
		borderRadius: "20px",
		cursor: "pointer",
		color: "white",
		width: "25rem",
		height: "5rem",
	};

	return (
		<>
			<Modal
				backdrop="static"
				role="alertdialog"
				open={open}
				onClose={handleClose}
				size="full"
				keyboard={false}
			>
				<Modal.Header closeButton={false} style={HEADER_STYLES}>
					Get Catalogue Access
				</Modal.Header>
				<Modal.Body style={{ textAlign: "center" }}>
					<p style={P_STYLES}>
						Enter your mobile number to access your catalogue.
					</p>
					<input
						type="number"
						placeholder="Enter Mobile Number"
						className="modal-input"
						style={INPUT_STYLES}
					/>
				</Modal.Body>
				<Modal.Footer style={{ textAlign: "center" }}>
					<Button onClick={handleClose} style={BTN_STYLES}>
						Get OTP
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CataloguePage;
