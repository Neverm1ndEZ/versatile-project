import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Modal, ButtonToolbar, Button } from "rsuite";
import OtpInput from "react-otp-input";

const Nav = () => {
	const [open, setOpen] = useState(false);
	const [otp, setOtp] = useState("");
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const EmailModal = () => {
		const [otpClicked, setOtpClicked] = useState(false);

		const handleGetOTP = () => {
			setOtpClicked(true);
		};

		const handleGetOTPBack = () => {
			setOtpClicked(false);
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
						<Modal.Header closeButton={false}>
							<Modal.Title style={HEADER_STYLES}>
								Get Catalogue Access
							</Modal.Title>
						</Modal.Header>
						<Modal.Body style={{ textAlign: "center" }}>
							<p>
								Enter OTP to validate your mobile number and get your catalogue
								access.
							</p>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									marginTop: "2rem",
								}}
							>
								<OtpInput
									value={otp}
									onChange={setOtp}
									numInputs={4}
									renderSeparator={<span>-</span>}
									renderInput={(props) => <input {...props} />}
									inputStyle={{
										width: "3rem",
										height: "3rem",
										margin: "0 1rem",
										fontSize: "2rem",
										borderRadius: "4px",
										border: "1px solid rgba(0,0,0,.3)",
									}}
								/>
							</div>
						</Modal.Body>
						<Modal.Footer style={{ display: "flex", textAlign: "center" }}>
							<Button onClick={handleClose} style={BTN_STYLES}>
								Verify OTP
							</Button>
							<Button onClick={handleGetOTPBack} style={BTN_STYLES}>
								Change Number
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
						<Button onClick={handleGetOTP} style={BTN_STYLES}>
							Get OTP
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

export default Nav;
