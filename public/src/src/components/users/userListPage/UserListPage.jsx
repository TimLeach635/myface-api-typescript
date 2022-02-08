import React, { useEffect, useState } from "react";
import { UserList } from "../userList/UserList";

export function UserListPage() {
    const [userList, setUserList] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/users`)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
        },
        []
    );

    return <main>
        <h1>MyFace - Users</h1>
        {
            userList !== undefined
                ? <UserList userList={userList} />
                : <p>Loading users...</p>
        }
    </main>
}
