import AllUsers from '@/database/AllUsers';
import {cache} from 'react';
import 'server-only';

const getUsers = cache(()=> {
    return AllUsers();
})

export default getUsers;