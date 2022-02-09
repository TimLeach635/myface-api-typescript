import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PostList } from "../postList/PostList";
import "./PostListPage.scss";

export function PostListPage() {
    const [postList, setPostList] = useState();
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();

    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    useEffect(
        function() {
            const url = `http://localhost:3001/posts?${
                pageNumber
                    ? `page=${pageNumber}`
                    : ""
            }&${
                pageSize
                    ? `pageSize=${pageSize}`
                    : ""
            }`

            fetch(url)
                .then(response => response.json())
                .then(postListJson => {
                    setPostList(postListJson.results);
                    setNext(postListJson.next);
                    setPrevious(postListJson.previous);
                });
        },
        [pageNumber, pageSize]
    );

    const nextPrevLinks = <div>
        {
            previous
                ? <Link className="page-arrow" to={previous}>⬅</Link>
                : <></>
        }
        {
            next
                ? <Link className="page-arrow" to={next}>➡</Link>
                : <></>
        }
    </div>

    let listElements;
    if (postList !== undefined) {
        listElements = <>
            {nextPrevLinks}
            <PostList postList={postList} />
            {nextPrevLinks}
        </>
    } else {
        listElements = <p>Loading posts...</p>
    }

    return <main>
        <h1>MyFace - Posts</h1>
        {listElements}
    </main>
}
