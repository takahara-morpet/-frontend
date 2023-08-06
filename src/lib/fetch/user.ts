// client.ts

import axios from "axios";
import Routes from "../../constants/routes";
import { User } from "../../types/response/user";
import { UserDetail } from "@/types/response/user";



export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(Routes.PRO_USERS_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserDetail = async (id: string): Promise<UserDetail> => {
  try {
    console.log(`${Routes.USERS_DETAIL_URL}/${id}`);
    const response = await axios.get(`${Routes.USERS_DETAIL_URL}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMyAccount = async (): Promise<UserDetail> => {
  try {
    const response = await axios.get(Routes.PRO_PROFILE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

