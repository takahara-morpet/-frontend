// client.ts

import axios from "axios";
import Routes from "../constants/routes";
import { User } from "../types/response/user";


export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(Routes.HOME_PATH);
    return response.data;
  } catch (error) {
    throw error;
  }
};
