export default function authHeader() {
	const token = sessionStorage.getItem("token");
	const user = sessionStorage.getItem("name");
	if (user && token) {
		return { Authorization: `Bearer ${token}` };
	} else {
		return {};
	}
}
