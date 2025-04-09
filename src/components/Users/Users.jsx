import React, { useState, useEffect } from "react";
import { getAllUsers, updateRole } from "../../services";
import { toast } from "react-toastify";
import { Table, Row, Name, Role } from "./Users.styled";
import Select from "react-select";
import Section from "../Section/Section";
import { BarLoader } from "react-spinners";
import { customStyles } from "./SelectCustomStyles";
const options = [
  { value: "user", label: "user" },
  { value: "designer", label: "designer" },
  { value: "creator", label: "creator" },
  { value: "service", label: "service" },
  { value: "rental", label: "rental" },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // запит по всіх користувачів
  useEffect(() => {
    const controller = new AbortController();

    async function allUsers() {
      try {
        setIsLoading(true);
        const response = await getAllUsers(controller.signal);
        // console.log("response: ", response.data);
        setUsers(response.data);
      } catch (error) {
        toast.error("Не вдалось завантажити користувачів");
      } finally {
        setIsLoading(false);
      }
    }
    allUsers();
  }, []);

  // функція зміни ролі
  async function handleChange(selectedRole, id) {
    setSelectedRole(selectedRole);
    // Запит на зміну ролі
    const controller = new AbortController();
    async function updateUserRole(id) {
      try {
        // Виконуємо запит на зміну ролі
        const response = await updateRole(
          id,
          selectedRole.value,
          controller.signal
        );

        // Якщо запит успішний, оновлюємо стан користувачів
        if (response.status === 200) {
          // Знаходимо індекс користувача, якому ми змінюємо роль
          const userIndex = users.findIndex((user) => user._id === id);

          // Перевіряємо, чи знайдено користувача з вказаним ідентифікатором
          if (userIndex !== -1) {
            // Клонуємо масив користувачів
            const updatedUsers = [...users];

            // Оновлюємо роль користувача з вказаним ідентифікатором
            updatedUsers[userIndex] = {
              ...updatedUsers[userIndex],
              role: selectedRole.value,
            };

            // Встановлюємо оновлений масив користувачів у стані компонента
            setUsers(updatedUsers);
          }
        }
      } catch (error) {
        // Виводимо повідомлення про помилку, якщо сталася помилка під час виконання запиту
        toast.error("Не вдалось оновити роль");
      }
    }

    // Викликаємо функцію для оновлення ролі користувача
    updateUserRole(id);
  }

  // функція Сортування таблиці
  const sortData = (param) => {
    const sortedData =
      sortDirection === "asc"
        ? [...users].sort((a, b) =>
            a[param] < b[param] ? -1 : a[param] > b[param] ? 1 : 0
          )
        : [...users].sort((a, b) =>
            b[param] < a[param] ? -1 : b[param] > a[param] ? 1 : 0
          );

    setUsers(sortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <>
      {isLoading ? (
        <BarLoader color="#125b56" width="100%" />
      ) : (
        <Section>
          <Table>
            <caption>Список зареєстрованих користувачів</caption>
            <thead>
              <tr>
                <th onClick={() => sortData("name")}>Ім'я</th>
                <th onClick={() => sortData("lastName")}>Прізвище</th>
                <th onClick={() => sortData("email")}>Email</th>
                <th onClick={() => sortData("phone")}>Телефон</th>
                <th onClick={() => sortData("company")}>Компанія</th>
                <th onClick={() => sortData("jobRole")}>Посада</th>
                <th onClick={() => sortData("role")}>Змінити роль</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <Row key={user._id}>
                    <Name role={user.role}>{user.name}</Name>
                    <Name role={user.role}>{user.lastName}</Name>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.company}</td>
                    <td>{user.jobRole}</td>
                    <Role role={user.role}>
                      <Select
                        isDisabled={user.role === "admin"}
                        placeholder={user.role}
                        defaultValue={selectedRole}
                        onChange={(option) => handleChange(option, user._id)}
                        options={options}
                        styles={customStyles}
                      />
                    </Role>
                  </Row>
                );
              })}
            </tbody>
          </Table>

          <p>Кількість користувачів: {users.length}</p>
        </Section>
      )}
    </>
  );
};

export default Users;
