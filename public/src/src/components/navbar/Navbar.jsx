import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return <nav>
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
    </nav>
}
