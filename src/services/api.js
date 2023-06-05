import axios from "axios";
axios.defaults.baseURL = "https://classifier-imxy.onrender.com";

export async function getAll() {
  try {
    const response = await axios.get(`api/v1/elements`);
    console.log(response);
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
