import axios from "axios";
axios.defaults.baseURL = "https://classifier-backend.fly.dev/api/v1";
// axios.defaults.baseURL = "http://localhost:5000/api/v1";

export const PLUGIN_URL =
  "https://bimhelp.com.ua/bimstore/construction-cost-management/";

// Materials ________________________________________________________
export async function getAll(signal) {
  const response = await axios.get(`/all-material`, { signal });
  // console.log(response);
  return response.data;
}

export async function getByLevel(level, signal) {
  // console.log("level: ", level);
  const response = await axios.get(`/material-by-level/${level}`, { signal });
  return response.data;
}

export async function getMaterialByUser(signal) {
  const response = await axios.get("/user-material", { signal });
  return response.data;
}

export async function getByParentId(parentCode, signal) {
  const response = await axios.get(`/material-by-parent/${parentCode}`, {
    signal,
  });
  return response.data;
}

export async function getMaterialTree(id, signal) {
  const response = await axios.get(`/material-tree/${id}`, { signal });
  return response.data;
}

export async function getMaterialById(id, signal) {
  const response = await axios.get(`/material/${id}`, { signal });
  return response.data;
}

// Пошук матеріалу по коду
export async function searchMaterialByCode(number) {
  const response = await axios.get("/material/search/by-code", {
    params: {
      number: number,
    },
  });
  return response.data;
}

// Пошук матеріалу по опису
export async function searchMaterialByDescription(description) {
  const response = await axios.get("/material/search/by-description", {
    params: {
      description: description,
    },
  });
  return response.data;
}

// Додати матеріал
export async function addMaterial(newElement, signal) {
  const response = await axios.post("/material", newElement, { signal });
  // console.log("response: ", response.data);

  return response.data;
}

// Оновити матеріал
export async function updateMaterial(id, editedMaterial, signal) {
  const response = await axios.put(`/material/${id}`, editedMaterial, {
    signal,
  });
  // console.log("response: ", response);
  return response.data;
}

// Оновити матеріалам parentId
export async function updateParentId(id) {
  const response = await axios.patch(`/material/${id}/ParentElementId`);
  // console.log("response data: ", response.data.data.ParentElementId);
  return response.data.data;
}

// Видалити матеріал
export async function removeMaterial(id) {
  const response = await axios.delete(`/material/${id}`);
  return response.data;
}

// Services________________________________________________________

// Додати сервіс
export async function addService(newElement, signal) {
  const response = await axios.post("/service", newElement, { signal });
  return response.data;
}

// Оновити сервіс
export async function updateService(id, editedService, signal) {
  const response = await axios.put(`/service/${id}`, editedService, {
    signal,
  });
  return response.data;
}

// Видалити сервіс
export async function removeService(id) {
  const response = await axios.delete(`/service/${id}`);
  return response.data;
}

// Отримати сервіс по ID
export async function getServiceById(id, signal) {
  const response = await axios.get(`/service/${id}`, { signal });
  return response.data;
}

// Отримати дерево сервісу
export async function getServiceTree(id, signal) {
  const response = await axios.get(`/service-tree/${id}`, { signal });
  return response.data;
}

// Отримати всі сервіси
export async function getAllServices(signal) {
  const responce = await axios.get("/all-service", { signal });
  return responce.data;
}

// Отримати сервіси користувача
export async function getServiceByUser(signal) {
  const response = await axios.get("/user-service", { signal });
  return response.data;
}

// Ортимати сервіси по level
export async function getServiceByLevel(level, signal) {
  const response = await axios.get(`/service-by-level/${level}`, {
    signal,
  });
  return response.data;
}

// // Ортимати сервіси по parent Code
// export async function getServiceByParentCode(parentCode, signal) {
//   const response = await axios.get(`/service-by-parent/${parentCode}`, {
//     signal,
//   });
//   return response.data;
// }
// Ортимати сервіси по parent Id
export async function getServiceByParentId(id, signal) {
  const response = await axios.get(`/service-by-parent/${id}`, {
    signal,
  });
  return response.data;
}

// Оновити сервісам parentId
export async function updateServiceParentId(id) {
  const response = await axios.patch(`/service/${id}/ParentElementId`);
  // console.log("response data: ", response.data.data.ParentElementId);
  return response.data.data;
}

// Пошук сервісів по коду
export async function searchServiceByCode(number) {
  const response = await axios.get("/service/search/by-code", {
    params: {
      number: number,
    },
  });
  return response.data;
}

// Пошук сервісів по опису
export async function searchServiceByDescription(description) {
  const response = await axios.get("/service/search/by-description", {
    params: {
      description: description,
    },
  });
  return response.data;
}

// Auth________________________________________________________

// Об'єкт token, має два методи
export const token = {
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

export async function googleAuthenticate() {
  window.location.href =
    "https://classifier-backend.fly.dev/api/v1/auth/google";

  // window.location.href = "http://localhost:5000/api/v1/auth/google";
}

export async function completeRegistration(credentials) {
  const response = await axios.post("/auth/complete", credentials);
  console.log("response: ", response);
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

// Admin ___________________________________________________

export async function getAllUsers(signal) {
  const response = await axios.get("/auth/manage", { signal });
  // console.log("response: ", response);
  return response.data;
}

export async function updateRole(id, selectedRole, signal) {
  const response = await axios.patch(
    `/auth/manage/${id}`,
    { role: selectedRole },
    {
      signal,
    }
  );
  // console.log(response);
  return response;
}
