export interface ProductPayload {
  title: string;
  price: number;
  category: string;
  tags: string[];
}

export interface ApiProduct extends ProductPayload {
  id: number;
}

export function mapProductData(product: ApiProduct): ApiProduct {
  const { id, title, category, price, tags } = product;
  return {
    id,
    title,
    category,
    price,
    tags,
  };
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | undefined;
}

export interface CreatedProduct extends ProductPayload {
  id: number;
}

export const productToAdd = {
  title: "Cricket Bat",
  price: 200,
  category: "Sports Goods",
  tags: ["cricket", "sports"]
};