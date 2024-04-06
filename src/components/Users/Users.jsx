import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../services";
import { toast } from "react-toastify";
import { Table } from "./Users.styled";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function allUsers() {
      try {
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

  return (
    <>
      {!isLoading && (
        <div>
          <Table>
            <caption>Список зареєстрованих користувачів</caption>
            <thead>
              <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Email</th>
                <th>Телефон</th>
                <th>Компанія</th>
                <th>Посада</th>
                <th>Роль</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.company}</td>
                  <td>{user.jobRole}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <p>Кількість користувачів: {users.length}</p>
        </div>
      )}
    </>
  );
};

export default Users;
