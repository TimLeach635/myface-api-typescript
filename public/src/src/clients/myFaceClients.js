export async function getPosts(pageNumber, pageSize) {
    const url = `http://localhost:3001/posts?${
        pageNumber
            ? `page=${pageNumber}`
            : ""
    }&${
        pageSize
            ? `pageSize=${pageSize}`
            : ""
    }`

    const response = await fetch(url);
    return await response.json();
}

export async function getUsers(pageNumber, pageSize) {
    const url = `http://localhost:3001/users?${
        pageNumber
            ? `page=${pageNumber}`
            : ""
    }&${
        pageSize
            ? `pageSize=${pageSize}`
            : ""
    }`

    const response = await fetch(url);
    return await response.json();
}
