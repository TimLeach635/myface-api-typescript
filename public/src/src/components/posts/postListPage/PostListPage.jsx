import React, { useEffect, useState } from "react";
import { PostList } from "../postList/PostList";

export function PostListPage() {
    const [postList, setPostList] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/posts`)
                .then(response => response.json())
                .then(postListJson => setPostList(postListJson.results));
        },
        []
    );

    return <main>
        <h1>MyFace - Posts</h1>
        {
            postList !== undefined
                ? <PostList postList={postList} />
                : <p>Loading posts...</p>
        }
    </main>
}
