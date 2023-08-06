import getEndpoint from '@/lib/router/url';

export const DEV_SERVER_URL = "http://localhost:4000"
export const PRO_SERVER_URL = "https://graph.shion.pro/api/v0"
export const HOME_URL = `${getEndpoint()}/events`
export const USERS_URL = `${getEndpoint()}/friends`
export const USERS_DETAIL_URL = `${getEndpoint()}/user-detail`
export const EVENTS_URL = `${getEndpoint()}/events`
export const EVENTS_DETAIL_URL = `${getEndpoint()}/event-detail`
export const PROFILE_URL = `${getEndpoint()}/user/@me`
