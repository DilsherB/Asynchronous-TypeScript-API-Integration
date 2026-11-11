interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | undefined;
}

interface ApiUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
}

async function fetchApiUser(userId: number): Promise<ApiResponse<ApiUser>> {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Server error received with status: ${response.status}`);
    }
    const fetchedApiUser: ApiUser = await response.json();
    const { id, firstName, lastName, email, age, gender } = fetchedApiUser;
    return {
      success: true,
      message: "User fetched successfully from API",
      data: {
        id,
        firstName,
        lastName,
        email,
        gender,
        age,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Request failed",
      data: undefined,
    };
  }
}

console.log("====================================");
fetchApiUser(1).then((u) => console.log(u));
console.log("====================================");
