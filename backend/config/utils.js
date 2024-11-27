import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI ="mongodb://127.0.0.1/sang";
const REDIS_URL = "redis://localhost:6379'";

export { MONGODB_URI, PORT, REDIS_URL };
