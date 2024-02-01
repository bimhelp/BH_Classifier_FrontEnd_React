import axios from "axios";
// axios.defaults.baseURL = "https://classifier-imxy.onrender.com/api/v1";
axios.defaults.baseURL = "https://classifier-backend.fly.dev/api/v1";

export async function getAll() {
  try {
    const response = await axios.get(`/elements`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getMainCategory() {
  try {
    const response = await axios.get(`/elements/category`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSubCategory(spvCode) {
  try {
    const response = await axios.get(`/elements/subcategory`, {
      params: { code: spvCode },
    });
    // console.log("data: ", response.data.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMaterials(number) {
  try {
    const response = await axios.get("/elements/search/by-code", {
      params: {
        number: number,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function searchByDescription(description) {
  try {
    const response = await axios.get("/elements/search/by-description", {
      params: {
        description: description,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addElement(newElement) {
  try {
    const response = await axios.post("/element", newElement);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
