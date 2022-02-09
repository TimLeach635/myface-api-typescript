import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getUsers } from "../../../clients/myFaceClients";
import { UserList } from "../userList/UserList";

export function UserListPage() {
    const [userList, setUserList] = useState();
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();

    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    useEffect(
        function() {
            getUsers(pageNumber, pageSize)
                .then(usersPage => {
                    setUserList(usersPage.results);
                    setNext(usersPage.next);
                    setPrevious(usersPage.previous);
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
    if (userList !== undefined) {
        listElements = <>
            {nextPrevLinks}
            <UserList userList={userList} />
            {nextPrevLinks}
        </>
    } else {
        listElements = <p>Loading users...</p>
    }

    return <main>
        <h1>MyFace - Users</h1>
        {listElements}
    </main>
}
