import React from 'react';
import UserComponent from "@/components/users/UserComponent";

const UserPage = ({searchParams}: any) => {
    let user = JSON.parse(searchParams.data);
    return (
        <div>
           <UserComponent user={user}/>
        </div>
    );
};

export default UserPage;