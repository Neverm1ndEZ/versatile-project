import "./NavForCatalogue.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Modal, ButtonToolbar, Button } from "rsuite";
import OtpInput from "react-otp-input";

const NavForCatalogue = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [otp, setOtp] = useState("");
	const [emailModalOpen, setEmailModalOpen] = useState(true);
	const [otpModalOpen, setOtpModalOpen] = useState(false);

	const handlePhoneNumberChange = (e) => {
		const inputPhoneNumber = e.target.value;
		const formattedPhoneNumber = inputPhoneNumber.replace(/\D/g, "");

		if (formattedPhoneNumber.length <= 10) {
			setPhoneNumber(formattedPhoneNumber);
		}
	};

	const handleGetOtp = () => {
		setEmailModalOpen(false);
		setOtpModalOpen(true);
	};

	const handleVerifyOtp = () => {
		// Perform OTP verification logic here
		// If OTP is verified successfully, close the modal
		setOtpModalOpen(false);
	};

	const handleEmailModalClose = () => {
		setEmailModalOpen(false);
	};

	const handleOtpModalClose = () => {
		setOtpModalOpen(false);
		setOtp(""); // Reset OTP input
	};

	const handleOpenEmailModal = () => {
		setPhoneNumber("");
		setEmailModalOpen(true);
		setOtpModalOpen(false);
		setOtp(""); // Reset OTP input
	};

	return (
		<div className="navbar">
			<Link to="/" className="catalogue-btn">
				<div className="logo">
					<img src={Logo} alt="Versatile Logo" className="navbar_img" />
				</div>
			</Link>
			<ButtonToolbar>
				<div className="text" onClick={() => setEmailModalOpen(true)}>
					CATALOGUE
				</div>
			</ButtonToolbar>
			<Modal
				backdrop="static"
				role="alertdialog"
				open={emailModalOpen}
				onClose={handleEmailModalClose}
				size="md"
				keyboard={false}
			>
				<Modal.Header closeButton={false} style={HEADER_STYLES}>
					Get Catalogue Access
				</Modal.Header>
				<Modal.Body style={BODY_STYLES}>
					<p style={P_STYLES}>
						Enter your mobile number to access your catalogue.
					</p>
					<input
						type="text"
						value={phoneNumber}
						onChange={handlePhoneNumberChange}
						placeholder="Enter Mobile Number"
						style={INPUT_STYLES}
					/>
				</Modal.Body>
				<Modal.Footer style={{ textAlign: "center" }}>
					<Button onClick={handleGetOtp} style={BTN_STYLES}>
						GET OTP
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal
				backdrop="static"
				role="alertdialog"
				open={otpModalOpen}
				onClose={handleOtpModalClose}
				size="md"
				keyboard={false}
			>
				<Modal.Header closeButton={false} style={HEADER_STYLES}>
					Get Catalogue Access
				</Modal.Header>
				<Modal.Body style={BODY_STYLES}>
					<p style={P_STYLES}>
						Enter OTP to validate your mobile number and get your catalogue
						access.
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							margin: "1rem 0",
						}}
					>
						<OtpInput
							value={otp}
							onChange={setOtp}
							numInputs={4}
							renderSeparator={<span>-</span>}
							renderInput={(props) => <input {...props} />}
							inputStyle={{
								width: "4rem",
								height: "4rem",
								margin: "0 0.5rem",
								fontSize: "2rem",
								borderRadius: "4px",
								border: "1px solid rgba(0,0,0,.3)",
							}}
						/>
					</div>
				</Modal.Body>
				<Modal.Footer
					style={{
						display: "flex",
						justifyContent: "center",
						textAlign: "center",
					}}
				>
					<Button onClick={handleVerifyOtp} style={BTN_STYLES}>
						VERIFY OTP
					</Button>
					<Button onClick={handleOpenEmailModal} style={BTN_STYLES}>
						CHANGE NUMBER
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

const HEADER_STYLES = {
	fontFamily: "Quicksand",
	fontStyle: "normal",
	fontWeight: 700,
	fontSize: "30px",
	lineHeight: "41px",
	letterSpacing: "0.06em",
	color: "#000000",
	textAlign: "center",
};

const P_STYLES = {
	fontFamily: "Quicksand",
	fontStyle: "normal",
	fontWeight: 400,
	fontSize: "17px",
	lineHeight: "15px",
	letterSpacing: "0.06em",
	color: "#000000",
	padding: "0 0 0.75rem 0",
};

const INPUT_STYLES = {
	margin: "0.5rem 0",
	padding: "1rem 5rem",
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
	width: "8rem",
	height: "2rem",
	fontFamily: "Quicksand",
	fontSize: "12px",
	fontWeight: "500",
	letterSpacing: "0.06em",
};

const BODY_STYLES = {
	textAlign: "center",
	marginTop: "0",
};

export default NavForCatalogue;
