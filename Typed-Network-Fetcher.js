"use strict";
// mark the function as "async" and specify "promise" return type interface: "ApiProduct"
async function fetchApiData(productId) {
    // try/catch block
    try {
        // await the fetch network request
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        // check for HTTP errors like 404, 500 etc.
        if (!response.ok) {
            throw new Error(`Network response failed with status ${response.status}`);
        }
        // awiat and cast the parsed json data to interface: "ApiProduct"
        const fetchedProductData = await response.json();
        const { id, title, category, price, tags } = fetchedProductData;
        return {
            id,
            title,
            category,
            price,
            tags,
        };
    }
    catch (error) {
        // safely handle the unknown error types in catch block
        const errorMsg = "Error in fetching product data.";
        const apiError = error instanceof Error ? error.message : error;
        console.log(errorMsg, apiError);
        return undefined;
    }
}
// function call
console.log("====================================");
const getApiData = fetchApiData(1).then((product) => {
    console.log(product);
});
console.log("====================================");
