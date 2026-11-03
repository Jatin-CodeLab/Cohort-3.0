import {useState} from 'react'
import { useNavigate } from "react-router";
import { useAuth } from "../contextAPI/AuthContext";
import useApi from "../../axios/api";

function Register() {

  const { register } = useAuth()
  const api = useApi()
  const navigate = useNavigate()
  const [form, setForm] = useState({name:"",email:"",password:""})
  const [error, setError] = useState(null)

const handleSubmit = async (e) => {
	e.preventDefault();

	setError(null);

	console.log("Form Data:", form);

	try {
		const response = await api.post("/auth/register", form);

		console.log(response.data);
	} catch (err) {
		setError(err?.response?.data?.message || "Register failed");
	}
};

  const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

  return (
		<div>
			<h1>Register Form : </h1>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="enter name"
					name="name"
					value={form.name}
					onChange={handleChange}
					type="text"
				/>

				<input
					placeholder="enter email"
					name="email"
					value={form.email}
					onChange={handleChange}
					type="email"
				/>

				<input
					placeholder="enter password"
					name="password"
					value={form.password}
					onChange={handleChange}
					type="password"
				/>
				<button type="submit">Submit</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	);
}

export default Register