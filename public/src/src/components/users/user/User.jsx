import React from "react";

export function User({ user }) {
    return <div>
        <h2>{user.name}</h2>
        <img src={user.profileImageUrl} alt={user.name} />
        <p>{user.username} - {user.email}</p>
    </div>
}
