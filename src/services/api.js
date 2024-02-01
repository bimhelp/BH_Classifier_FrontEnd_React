import axios from "axios";
// axios.defaults.baseURL = "https://classifier-imxy.onrender.com/api/v1";
axios.defaults.baseURL = "https://classifier-backend.fly.dev/api/v1";

export async function getAll() {
  const response = await axios.get(`/elements`);
  console.log(response);
  return response.data;
}

export async function getMainCategory() {
  const response = await axios.get(`/elements/category`);
  return response.data;
}

export async function getSubCategory(spvCode) {
  const response = await axios.get(`/elements/subcategory`, {
    params: { code: spvCode },
  });
  return response.data;
}

export async function searchMaterials(number) {
  const response = await axios.get("/elements/search/by-code", {
    params: {
      number: number,
    },
  });
  return response.data;
}

export async function searchByDescription(description) {
  const response = await axios.get("/elements/search/by-description", {
    params: {
      description: description,
    },
  });
  return response.data;
}

export async function addElement(newElement) {
  const response = await axios.post("/element", newElement);
  return response.data;
}
