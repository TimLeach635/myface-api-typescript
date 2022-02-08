import React, { useState, useEffect } from "react";
import { PostList } from "../../posts/postList/PostList";
import { User } from "../user/User";

export function UserDetailPage({ userId }) {
    const [user, setUser] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/users/${userId}`)
                .then(response => response.json())
                .then(userJson => setUser(userJson));
        },
        [userId]
    );

    let userPageContent;

    if (user !== undefined) {
        userPageContent = <>
            <User user={user} />
            <h2>{user.name}'s Posts</h2>
            <PostList postList={user.posts} />
        </>
    } else {
        userPageContent = <p>Loading user details...</p>
    }

    return <main>
        <h1>MyFace - User Page</h1>
        {userPageContent}
    </main>
}
