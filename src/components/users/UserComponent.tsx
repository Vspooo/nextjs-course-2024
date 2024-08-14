import React, {FC} from 'react';
import {IUserModel} from "@/models/userModel";
import Link from "next/link";
import NavLinkClient from "@/components/nav-link-client-component/NavLinkClient";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {

    return (
        <div>
            <h4>{user.id} : {user.name} {user.username}. contact : {user.email}</h4>
            <NavLinkClient path={`/posts/${user.id}`}> show {user.name}`s posts</NavLinkClient>
        </div>
    );
};

export default UserComponent;