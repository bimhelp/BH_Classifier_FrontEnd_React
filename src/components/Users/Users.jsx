import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../services";
import { toast } from "react-toastify";
import { UserItem, UserName, UserEmail, Item } from "./Users.styled";

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
          <ul>
            {users.map((user) => (
              <Item key={user._id}>
                <UserItem>
                  <UserName>
                    {user.name} {user.lastName}
                  </UserName>
                  <UserEmail>{user.email}</UserEmail>
                  <p>{user.phone}</p>
                  <p>{user.company}</p>
                  <p>{user.jobRole}</p>
                </UserItem>
              </Item>
            ))}
          </ul>
          <p>Кількість користувачів: {users.length}</p>
        </div>
      )}
    </>
  );
};

export default Users;
