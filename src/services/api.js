import axios from "axios";
axios.defaults.baseURL = "https://classifier-imxy.onrender.com/api/v1";

export async function getAll() {
  try {
    const response = await axios.get(`/elements`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCategory() {
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

export async function addElement(newElement) {
  try {
    const response = await axios.post("/element", newElement);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
