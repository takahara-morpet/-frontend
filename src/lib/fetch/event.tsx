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