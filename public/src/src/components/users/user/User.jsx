import React from "react";
import { Link } from "react-router-dom";

export function User({ user }) {
    return <div>
        <Link to={`/users/${user.id}`}>
            <h2>{user.name}</h2>
        </Link>
        <img src={user.profileImageUrl} alt={user.name} />
        <p>{user.username} - {user.email}</p>
    </div>
}
