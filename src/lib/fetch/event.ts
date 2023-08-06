import axios from "axios";
import Routes from "../../constants/routes";
import { Event } from "../../types/response/event";


export const fetchEvents = async ():Promise<Event[]>=>{
    try{
        const response=await axios.get(Routes.EVENTS_URL);
        return response.data ;

    }catch(error){
        throw error;
    };
}

export const fetchEventDetail = async (id: string): Promise<Event> => {
    try {
      console.log(`${Routes.EVENTS_URL}/${id}`);
      const response = await axios.get(`${Routes.EVENTS_DETAIL_URL}/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }