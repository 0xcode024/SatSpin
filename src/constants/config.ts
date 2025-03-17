export const BASE_URL = process.env.BASE_URL;
export const PUBLIC_NETWORK = process.env.PUBLIC_NETWORK;
export const io = require("socket.io-client");
export const socket = io(BASE_URL);
