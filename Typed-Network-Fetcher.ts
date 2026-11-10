interface ApiResponse {
  id: number;
  title: string;
  price: number;
  category: string;
}
// mark the function as "async" and specify "promise" return type interface: "ApiResponse"
async function fetchApiData(
  productId: number,
): Promise<ApiResponse | undefined> {
  // try/catch block
  try {
    // await the fetch network request
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${productId}`,
    );
    // check for HTTP errors like 404, 500 etc.
    if (!response.ok) {
      throw new Error(`Network response failed with status ${response.status}`);
    }
    // awiat and cast the parsed json data to interface: "ApiResponse"
    const productData: ApiResponse = await response.json();
    return productData;
  } catch (error: unknown) {
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
