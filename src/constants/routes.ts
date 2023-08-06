enum Routes {
    DEV_SERVER_URL = 'http://localhost:4000',
    PRO_SERVER_URL='https://graph.shion.pro/api/v0',
    HOME_URL = '/',
    DEV_USERS_URL = `${DEV_SERVER_URL}/users`,
    USERS_DETAIL_URL = `${DEV_SERVER_URL}/user-detail`, // json-serverで分けるためのURL
    EVENTS_URL = `${DEV_SERVER_URL}/events`,
    EVENTS_DETAIL_URL = `${DEV_SERVER_URL}/event-detail`, // json-serverで分けるためのURL
    Profile_URL = `${DEV_SERVER_URL}/accounts`, // TODO: 仮
    PRO_USERS_URL = `${PRO_SERVER_URL}/friends`,
}

export default Routes;
