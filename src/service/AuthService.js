import axios from "./axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const login = async (formData) => {
	try {
		let url = "/auth/login";

		const res = await axios.post(url, {
			email: formData.email,
			password: formData.password,
		});
		// const { UserName, Uid, aud, exp, Role } = jwt_decode(res.data.token);
		// const { sub, iat } = jwt_decode(res.data.token);

		// console.log(jwt_decode(res.data.token));
		console.log(res);

		sessionStorage.setItem("token", res.data.token);
		// sessionStorage.setItem("sub", sub);
		// sessionStorage.setItem("iat", iat);
		// sessionStorage.setItem("UserName", UserName);
		// sessionStorage.setItem("Uid", Uid);
		// sessionStorage.setItem("Role", Role);
		// sessionStorage.setItem("role", role);
		toast.success("Success");
		// return { aud, exp, UserName, Uid };
		// return { sub, iat };
	} catch (error) {
		toast.error("login failed");
		throw error;
	}
};

export const getCurrentUser = () => {
	// return sessionStorage.getItem("UserName");
};

export const getCurrentRole = () => {
	return sessionStorage.getItem("sub");
};

export const getCurrentIdUser = () => {
	return sessionStorage.getItem("iat");
};

export const logout = () => {
	// sessionStorage.removeItem("Uid");
	// sessionStorage.removeItem("UserName");
	// sessionStorage.removeItem("Role");
	// sessionStorage.removeItem("token");
	// sessionStorage.removeItem("exp");
	// sessionStorage.removeItem("aud");
};
