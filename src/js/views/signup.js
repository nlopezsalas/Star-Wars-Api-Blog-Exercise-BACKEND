import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState(""); // Estado para la repetición de la contraseña
    const [name, setName] = useState("");
    const [message, setMessage] = useState({ text: "", type: "" });
    const { actions } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// 1. Comprobamos que las contraseñas introducidas son iguales
		if (password !== repeatPassword) {
            setMessage({ text: "Passwords do not match.", type: "danger" });
            return;
        }

		const result = await actions.registerUser(name, email, password);
        setMessage({ text: result.msg, type: result.success ? "success" : "danger" });

	};

	return (
		<div className="base container-fluid pt-5 pb-5">
			<Row>
				<Col></Col>
				<Col className="bg-black">
					<h1 className="text-white">Sign Up</h1>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-primary">Name</Form.Label>
							<Form.Control type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-primary">Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label className="text-primary">Password</Form.Label>
							<Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formRepeatPassword">
							<Form.Label className="text-primary">Repeat password</Form.Label>
							<Form.Control type="password" placeholder="Repeat password" onChange={e => setRepeatPassword(e.target.value)} />
						</Form.Group>

						<Button variant="primary" type="submit">
							Create account
						</Button>

						{message.text && <div className={`alert alert-${message.type}`}>{message.text}</div>}

					</Form>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
};

export default SignUp;
