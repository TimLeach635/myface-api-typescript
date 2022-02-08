import React from "react";

export function Post({ post }) {
    return <div>
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} />
        {
            post.postedby !== undefined
                ? <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
                : <p>{post.createdAt}</p>
        }
    </div>
}
