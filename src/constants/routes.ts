enum Routes {
    HOME_URL = '/',
    USERS_URL = '/users',
    EVENTS_URL = '/events',
    Profile_URL = '/accounts', // TODO: 仮
    HOME_USERS_PATH=`http://localhost:4000${USERS_URL}`,
    HOME_EVENTS_PATH=`http://localhost:4000${EVENTS_URL}`,

}

export default Routes;
