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
	},
});
