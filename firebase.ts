import { FirebaseOptions, initializeApp } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: "realtime-chat-67cd6.firebaseapp.com",
	projectId: "realtime-chat-67cd6",
	storageBucket: "realtime-chat-67cd6.firebasestorage.app",
	messagingSenderId: "48536175345",
	appId: "1:48536175345:web:e936688a88f24353ea9f50"
};

const app = initializeApp(firebaseConfig);
