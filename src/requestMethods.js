import axios from "axios";
// const BASE_URL = "http://localhost:3001/api/";
const BASE_URL = 'https://redzari.onrender.com/api/'
const Token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZDEzNTFiZDI2NWEyNGRjOWU0MDRlIn0sImlhdCI6MTY0NTUwNzI2NH0.u7jsguj9vhiZ7V6qL9DXVBsJm0XkhUaWkLEf74wHXFk";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	},
});
export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		authToken: Token,
		'Content-Type': 'application/json'

	},
});

export const getProductRequest = axios.get({
	baseURL: "https://redzari-backend.onrender.com/api/products/find",
	headers: {
	"authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MDk2Mjc4NTI4MjMxNDQ3Yjg1MjgwIn0sImlhdCI6MTY4MTk1NDM5MX0.tCLffbtBoweYTPubu2nXKuIfN6bgWs5piJYL3Qi8Pqs"
	},
});

export const getSingleProductRequest = axios.get({
	baseURL: "https://redzari-backend.onrender.com/api/products/details?id=",
	headers: {
		"authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MDk2Mjc4NTI4MjMxNDQ3Yjg1MjgwIn0sImlhdCI6MTY4MTk1NDM5MX0.tCLffbtBoweYTPubu2nXKuIfN6bgWs5piJYL3Qi8Pqs"
	},
});

export const cartItemRequest = axios.get({
	baseURL: "https://redzari-backend.onrender.com/api/carts",
	headers: {
		"authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MDk2Mjc4NTI4MjMxNDQ3Yjg1MjgwIn0sImlhdCI6MTY4MTk1NDM5MX0.tCLffbtBoweYTPubu2nXKuIfN6bgWs5piJYL3Qi8Pqs"
	},
});
