import React from "react";
import { User } from "../user/User";

export function UserList({ userList }) {
    return <ol>
        {userList.map((user, index) => (
            <li key={index}>
                <User user={user} />
            </li>
        ))}
    </ol>
}
