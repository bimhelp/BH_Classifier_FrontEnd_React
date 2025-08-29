import React, { useState, useEffect } from "react";
import { getAllUsers, removeUser, updateRole } from "../../services";
import { toast } from "react-toastify";
import { Table, Row, Name, Role } from "./Users.styled";
import Select from "react-select";
import Section from "../Section/Section";
import { BarLoader } from "react-spinners";
import { PulseLoader } from "react-spinners";
import { customStyles } from "./SelectCustomStyles";
import { IconButton } from "../Button/Button";
import { MdDelete } from "react-icons/md";
import Confirm from "../Confirm/Confirm";
import { ConfirmButtons } from "../MaterialList/MaterialList.styled";
import { Button } from "../Button/Button";
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
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [delitingCandidate, setDelitingCandidate] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

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

  // Відкриття меню підтвердження
  const confirmDelete = (id) => {
    console.log("id: ", id);
    setDelitingCandidate(users.filter((user) => user._id === id)[0]);

    setConfirmOpen(id);
  };

  // Тогл меню підтвердження
  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };

  // функція видалення користувача
  async function handleDelete(id) {
    console.log("delete user: ", id);
    const controller = new AbortController();
    try {
      setDeleteLoading(true);
      const result = await removeUser(id, controller.signal);
      // console.log("result: ", result);
      // console.log(users.filter((user) => user._id !== result.data._id));
      setConfirmOpen(false);
      setUsers(users.filter((user) => user._id !== result.data._id));

      toast.info("Користувач успішно видалений");
    } catch (error) {
      toast.error("Не вдалось видалити користувача");
    } finally {
      setDeleteLoading(false);
    }
    return () => {
      controller.abort();
    };
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
                <th></th>
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
                    <td>
                      <IconButton
                        icon={MdDelete}
                        visibility="visible"
                        variant="neutral"
                        tooltip="Видалити"
                        onClick={() => confirmDelete(user._id)}
                      />
                    </td>
                  </Row>
                );
              })}
            </tbody>
          </Table>

          <p>Кількість користувачів: {users.length}</p>
        </Section>
      )}

      {confirmOpen && (
        <Confirm
          onClose={toggleConfirm}
          title="Видалити користувача? "
          element={
            delitingCandidate.name +
            " " +
            delitingCandidate.lastName +
            " " +
            delitingCandidate.email +
            " " +
            "Також будуть видалені всі його проекти, матеріали і послуги!"
          }
        >
          <ConfirmButtons>
            <Button onClick={() => handleDelete(confirmOpen)} role="warning">
              Видалити
              {deleteLoading && <PulseLoader color="#000000" size={5} />}
            </Button>
            <Button onClick={toggleConfirm}>Залишити</Button>
          </ConfirmButtons>
        </Confirm>
      )}
    </>
  );
};

export default Users;
