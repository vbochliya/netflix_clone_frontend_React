export const SignUp = async (username, email, password) => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
      return { error: data.error };
    }
    console.log("response signup:", data.message);
    return { message: data.message };
    // Handle success (e.g., redirect to login page or display a success message)
  } catch (error) {
    console.error("Error during SignUp:", error);
    return { error: error.message };
    // Handle error (e.g., display an error message to the user)
  }
};

export const Login = async (email, password) => {
  console.log(email, password)
  try {
    const response = await fetch(
      "http://localhost:8000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
      return { error: data.error };
    }
    console.log("response login jwt token:", data.token);
    localStorage.setItem("token", data.token);
    return { message: "login successfull" };
    // Handle success (e.g., store authentication token, redirect to dashboard)
  } catch (error) {
    console.error("Error during Login:", error);
    return { error: error.message };
    // Handle error (e.g., display an error message to the user)
  }
};
