import axios from "axios";
import { EVENTS_URL} from "../../constants/routes";
import { Event } from "../../types/response/event";


export const fetchEvents = async ():Promise<Event[]>=>{
    try{
        const response=await axios.get(EVENTS_URL);
        return response.data ;

    }catch(error){
        throw error;
    };
}

export const fetchEventDetail = async (id: string): Promise<Event> => {
    try {
      const response = await axios.get(`${EVENTS_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }