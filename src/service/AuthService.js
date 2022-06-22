import axios from "./axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const login = async (formData) => {
	try {
		let url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/login`;

		const res = await axios.post(url, {
			email: formData.email,
			password: formData.password,
		});
		console.log("show res login: ", res.data.data.user.cart);
		const { id, name, email, role } = jwt_decode(res.data.token);

		// console.log(jwt_decode(res.data.token));
		// console.log(res);

		sessionStorage.setItem("token", res.data.token);
		sessionStorage.setItem("id", id);
		sessionStorage.setItem("name", name);
		sessionStorage.setItem("email", email);
		sessionStorage.setItem("role", role);
		localStorage.setItem(
			"category",
			JSON.stringify(res.data.data.user.cart.items)
		);

		toast.success("Đăng nhập thành công!", {
			autoClose: 900,
			hideProgressBar: true,
		});
		return { id, name, email, role };
	} catch (error) {
		toast.error("Đăng nhập không thành công, vui lòng thử lại!", {
			autoClose: 900,
			hideProgressBar: true,
		});
		throw error;
	}
};

export const getCurrentUser = () => {
	return sessionStorage.getItem("name");
};

export const getCurrentRole = () => {
	return sessionStorage.getItem("role");
};

export const getCurrentIdUser = () => {
	return sessionStorage.getItem("id");
};

export const logout = () => {
	sessionStorage.removeItem("id");
	sessionStorage.removeItem("name");
	sessionStorage.removeItem("role");
	sessionStorage.removeItem("token");
	sessionStorage.removeItem("email");
	localStorage.removeItem("category");
};
