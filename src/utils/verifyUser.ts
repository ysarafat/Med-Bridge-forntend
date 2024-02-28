import { jwtDecode } from "jwt-decode";
export const verifyUser = (token: string) => {
  return jwtDecode(token);
};
