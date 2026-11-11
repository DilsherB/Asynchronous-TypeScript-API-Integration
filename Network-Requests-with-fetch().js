"use strict";
// 1. Mark the function as async and specify the Promise return type
async function getPostById(postId) {
    try {
        // 2. Await the fetch network request
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        // 3. Defensive check for HTTP errors (e.g., 404 or 500)
        if (!response.ok) {
            throw new Error(`Network response failed with status: ${response.status}`);
        }
        // 4. Cast the parsed JSON into our strict `Post` interface
        const postData = await response.json();
        return postData;
    }
    catch (error) {
        // 5. Safely handle unknown error types in catch blocks
        console.error("Error fetching post:", error instanceof Error ? error.message : error);
        return undefined;
    }
}
// Calling the async function
// getPostById(1).then((post) => {
//   console.log(post?.body);
// });
// console.log('====================================');
console.log(getPostById(1).then(console.log));
// console.log('====================================');
