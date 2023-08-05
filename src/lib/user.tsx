// client.ts

import axios from "axios";
import Routes from "../constants/routes";
import {User} from "../types/user";


export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(Routes.HOME_USERS_PATH);
    return response.data;
  } catch (error) {
    throw error;
  }
};
