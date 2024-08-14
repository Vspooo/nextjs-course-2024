import React from 'react';
import Link from "next/link";
import NavLinkClient from "@/components/nav-link-client-component/NavLinkClient";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLinkClient path={"/"}> home </NavLinkClient>
                </li>

                <li>

                    <NavLinkClient path={"/users"}> to users</NavLinkClient>
                </li>

                <li>

                    <NavLinkClient path={"/posts"}>to posts</NavLinkClient>
                </li>
                <li>

                   <NavLinkClient path={"/comments"}> to comments</NavLinkClient>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;