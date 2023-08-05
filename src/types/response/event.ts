import { User } from "./user";

export type Event = {
    id: string;
    name: string;
    time: string;
    image?: string;
    evaluation?: number;
  };

export type EventDetail = {
    id: string;
    name: string;
    time: string;
    image?: string;
    evaluation?: number;
    memo?: string;
    participants?: User[];
  };