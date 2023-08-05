import { User } from "./user";

export type Event = {
    id: string;
    name: string;
    time: string;
    image?: string;
  };

export type EventDetail = {
  id: string;
  name: string;
  time: string;
  image?: string;
  evaluation?: number;
  private_memo?: string;
  participants?: User[];
};