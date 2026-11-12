import {
  ApiResponse,
  productToAdd,
  ProductPayload,
  ApiProduct,
} from "./exportable.js";

async function createProduct(
  product: ProductPayload,
): Promise<ApiResponse<ApiProduct>> {
  try {
    const response = await fetch(`https://dummyjson.com/products/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      return {
        success: false,
        message: `Request failed with status ${response.status}`,
        data: undefined,
      };
    }
    const newProduct: ApiProduct = await response.json();
    return {
      success: true,
      message: "Product posted/created successfully.",
      data: newProduct,
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Request failed",
      data: undefined,
    };
  }
}

console.log("====================================");

createProduct(productToAdd).then(console.log);
