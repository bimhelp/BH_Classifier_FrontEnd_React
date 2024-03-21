import axios from "axios";
// axios.defaults.baseURL = "https://classifier-imxy.onrender.com/api/v1";
axios.defaults.baseURL = "https://classifier-backend.fly.dev/api/v1";

export async function getAll() {
  const response = await axios.get(`/all-material`);
  // console.log(response);
  return response.data;
}

export async function getByParentCode(parentCode, signal) {
  const response = await axios.get(`/material-by-parent/${parentCode}`, {
    signal,
  });
  return response.data;
}

export async function searchMaterials(number) {
  const response = await axios.get("/material/search/by-code", {
    params: {
      number: number,
    },
  });
  return response.data;
}

export async function searchByDescription(description) {
  const response = await axios.get("/material/search/by-description", {
    params: {
      description: description,
    },
  });
  return response.data;
}

export async function addElement(newElement) {
  const response = await axios.post("/category", newElement);
  return response.data;
}

// Auth________________________________________________________

// Об'єкт token, має два методи
const token = {
  // Передає токен в заголовок для будь-якого (common) запиту
  set(token) {
    // console.log("token: ", token);

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  // Скидає токен
  clear() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function registerUser(credentials) {
  const response = await axios.post("/auth/register", credentials);
  // записує токен в об'єкт token
  token.set(response.data.token);
  return response.data;
}

export async function logIn(credentials) {
  const response = await axios.post("/auth/login", credentials);
  // записує токен в об'єкт token
  token.set(response.data.token);
  return response.data;
}
export async function currentUser(currenttoken) {
  // console.log("currenttoken: ", currenttoken);
  token.set(currenttoken);
  const response = await axios.get("/auth/current");

  return response.data;
}

export async function logOut() {
  const response = await axios.post("/auth/logout");
  // токен вже є у хедері, тому що юзер вже був залогінений
  // тому його потрібно обнулити
  token.clear();
  return response.data;
}

// Projects___________________________________________________

export async function getProjects(signal) {
  const response = await axios.get("/projects", { signal });
  // token засетений при логінізаціїї і доданий до заголовків запиту, тому тут його не додаємо
  // console.log("response: ", response);
  return response.data;
}

export async function getProjectById(id, signal) {
  const response = await axios.get(`/projects/${id}`, { signal });
  // console.log("response: ", response);
  return response.data;
}
