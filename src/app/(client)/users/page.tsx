import React from 'react';
import {userApiService} from "@/servicres/user.api.service";
import UsersComponent from "@/components/users/UsersComponent";

const UsersPage = async () => {
    const users = await userApiService.getAllUsers();
    return (
        <div>
            {<UsersComponent users={users}/>}
        </div>
    );
};

export default UsersPage;