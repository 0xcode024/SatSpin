import { JWT_COOKIE } from "@/constants/auth.constants";

export const getJWT = async (): Promise<string | null> => {
  let token = sessionStorage.getItem(JWT_COOKIE);
  return token;
};

export const isTokenExpired = (token: string) => {
  if (!token) return true; // No token found, treat it as expired

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode the payload
    const expiry = payload.exp * 1000; // Convert to milliseconds
    return Date.now() >= expiry; // Check if expired
  } catch (error) {
    return true; // Invalid token format, treat as expired
  }
};
