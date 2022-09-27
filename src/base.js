import process from "node:process";
const baseUrl = process.env.NODE_ENV === "production" ? "/personalsite/" : "/";
export default baseUrl;
