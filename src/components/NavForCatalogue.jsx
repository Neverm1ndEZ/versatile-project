import "./NavForCatalogue.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Modal, ButtonToolbar, Button } from "rsuite";
import OtpInput from "react-otp-input";

const NavForCatalogue = () => {
	const [open, setOpen] = useState(true);
	const [otp, setOtp] = useState("");
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const EmailModal = () => {
		const [otpClicked, setOtpClicked] = useState(false);
		const [phoneNumber, setPhoneNumber] = useState("");

		const handleGetOTP = () => {
			setOtpClicked(true);
		};

		const handleGetOTPBack = () => {
			setOtpClicked(false);
		};

		const handlePhoneNumberChange = (e) => {
			const inputPhoneNumber = e.target.value;
			const formattedPhoneNumber = inputPhoneNumber.replace(/\D/g, "");

			if (formattedPhoneNumber.length <= 10) {
				setPhoneNumber(formattedPhoneNumber);
			}
		};

		const OTPModal = () => {
			return (
				<>
					<Modal
						backdrop="static"
						role="alertdialog"
						open={open}
						onClose={handleClose}
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
							<Button onClick={handleClose} style={BTN_STYLES}>
								VERIFY OTP
							</Button>
							<Button onClick={handleGetOTPBack} style={BTN_STYLES}>
								CHANGE NUMBER
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			);
		};

		return (
			<>
				<ButtonToolbar>
					<div className="text" onClick={handleOpen}>
						CATALOGUE
					</div>
				</ButtonToolbar>
				<Modal
					backdrop="static"
					role="alertdialog"
					open={open}
					onClose={handleClose}
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
						<Button onClick={handleGetOTP} style={BTN_STYLES}>
							GET OTP
						</Button>
					</Modal.Footer>
				</Modal>
				{otpClicked && <OTPModal />}
			</>
		);
	};

	const HEADER_STYLES = {
		fontFamily: '"Quicksand"',
		fontStyle: "normal",
		fontWeight: 700,
		fontSize: "30px",
		lineHeight: "41px",
		letterSpacing: "0.06em",
		color: "#000000",
		textAlign: "center",
	};

	const P_STYLES = {
		fontFamily: '"Quicksand"',
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

	return (
		<div className="navbar">
			<Link to="/" className="catalogue-btn">
				<div className="logo">
					<img src={Logo} alt="Versatile Logo" className="navbar_img" />
				</div>
			</Link>
			<Link to="/catalogue" className="catalogue-btn">
				<EmailModal />
			</Link>
		</div>
	);
};

export default NavForCatalogue;
