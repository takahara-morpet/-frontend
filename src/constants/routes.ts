enum Routes {
    DEV_SERVER_URL = 'http://localhost:4000',
    HOME_URL = '/',
    USERS_URL = `${DEV_SERVER_URL}/users`,
    USERS_DETAIL_URL = `${DEV_SERVER_URL}/user-detail`, // json-serverで分けるためのURL
    EVENTS_URL = `${DEV_SERVER_URL}/events`,
    Profile_URL = `${DEV_SERVER_URL}/accounts`, // TODO: 仮
}

export default Routes;
