import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
	apiKey: "AIzaSyArZ4GUlpmRgIq0B59tuToQOS3Du606UAI",
	authDomain: "shopphukien-cbc21.firebaseapp.com",
	databaseURL: "gs://shopphukien-cbc21.appspot.com",
	projectId: "shopphukien-cbc21",
	storageBucket: "shopphukien-cbc21.appspot.com",
	messagingSenderId: "61389022198",
	appId: "1:61389022198:web:07ac9739fac2a6836a9dd7",
	measurementId: "G-KB0HN7B05N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
