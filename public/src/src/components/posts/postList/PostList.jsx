import React from "react";
import { Post } from "../post/Post";

export function PostList({ postList }) {
    return <ol>
        {postList.map((post, index) => (
            <li key={index}>
                <Post post={post} />
            </li>
        ))}
    </ol>
}
