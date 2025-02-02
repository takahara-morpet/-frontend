// client.ts

import axios from "axios";
import { USERS_URL, USERS_DETAIL_URL, PROFILE_URL } from "../../constants/routes";
import { User } from "../../types/response/user";
import { UserDetail } from "@/types/response/user";



export const fetchUsers = async (): Promise<User[]> => {
  try {
    console.log(USERS_URL);
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error) {
    console.log("test")
    throw error;
  }
};

export const fetchUserDetail = async (username: string): Promise<UserDetail> => {
  try {
    console.log(`${USERS_DETAIL_URL}/${id}`);
    const response = await axios.get(`${USERS_DETAIL_URL}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMyAccount = async (): Promise<UserDetail> => {
  try {
    const response = await axios.get(PROFILE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

