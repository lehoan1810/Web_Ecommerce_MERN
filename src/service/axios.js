import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
	// baseURL: process.env.REACT_APP_API_URL,
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
		Accept: "application/json",
	},
	paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use((config) => {
	const token = sessionStorage.getItem("token");
	config.headers.Authorization = token ? `Bearer ${token}` : "";

	return config;
});
axiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// Handle errors
		throw error;
	}
);
export default axiosClient;
