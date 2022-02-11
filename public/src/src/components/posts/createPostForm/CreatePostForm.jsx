import React, { useState } from "react";
import { createPost } from "../../../clients/myFaceClients";

export function CreatePostForm() {
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    return <form onSubmit={e => {
        e.preventDefault();
        createPost(message, imageUrl);
    }}>
        <p>Message: {message}, ImageUrl: {imageUrl}</p>

        <label for="message">Message:</label>
        <input
            type="text"
            id="message"
            name="message"
            onChange={e => setMessage(e.target.value)}
        />

        <label for="imageUrl">Image URL:</label>
        <input
            type="text"
            id="imageUrl"
            name="imageUrl" 
            onChange={e => setImageUrl(e.target.value)}
        />

        <input type="submit" value="Submit" />
    </form>
}
