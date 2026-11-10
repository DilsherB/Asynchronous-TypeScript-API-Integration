"use strict";
async function fetchProductData(productId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
        if (!response.ok) {
            throw new Error(`Network response failed with status: ${response.status}`);
        }
        const productData = await response.json();
        return productData;
    }
    catch (error) {
        const errorMsg = "Error fetching product data";
        const apiError = error instanceof Error ? error.message : error;
        console.error(errorMsg, apiError);
        return undefined;
    }
}
console.log("====================================");
console.log(fetchProductData(90).then((product) => console.log(product)));
console.log("====================================");
