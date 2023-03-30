import React from "react";
import { useState } from "react";
// import { useRef } from "react";
import { useTranslation } from "react-i18next";

const UserList = () => {
  const { t, i18n } = useTranslation();

  const [active, setActive] = useState(false);

  const [todo, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // console.log(todo);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");

  const [editingTodos, setEditingTodo] = useState(null);
  // const [firstNameEdited, setfirstNameEditingTodo] = useState();
  // const [lastNameEdited, setlastNameEditingTodo] = useState();
  // const [userNameEdited, setUserNameEditingTodo] = useState();
  // const [ageEdited, setAgeEditingTodo] = useState();
  // const [salaryEdited, setSalaryEditingTodo] = useState();

  const handleChangeEventFirstName = (event) => {
    setfirstName(event.target.value);
  };

  const handleChangeEventLastName = (event) => {
    setlastName(event.target.value);
  };

  const handleChangeEventuserName = (event) => {
    setuserName(event.target.value);
  };

  const handleChangeEventAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeEventSalary = (event) => {
    setSalary(event.target.value);
  };

  const handleChangeSubmit = (event) => {
    event.preventDefault();

    if (!firstName.trim()) return;
    if (!lastName.trim()) return;
    if (!userName.trim()) return;
    if (!age.trim()) return;
    if (!salary.trim()) return;

    const newToDoS = {
      USERid: todo.length + 1,
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      age: age,
      salary: salary
    };
    setTodos([...todo, newToDoS]);
    setfirstName("");
    setlastName("");
    setuserName("");
    setAge("");
    setSalary("");
    if (editingTodos !== null) {
      const updateToDo = todo.map((todo) => {
        if (todo.id === editingTodos) {
          return {
            ...todo,
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            age: age,
            salary: salary
          };
        } else {
          return todo;
        }
      });
      setTodos(updateToDo);
      setEditingTodo(todo);
      setfirstName(updateToDo);
      setlastName(updateToDo);
      setuserName(updateToDo);
      setAge(updateToDo);
      setSalary(updateToDo);
      setfirstName("");
      setlastName("");
      setuserName("");
      setAge("");
      setSalary("");
    } else {
      const newToDoS = {
        USERid: todo.length + 1,
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        age: age,
        salary: salary
      };
      setTodos([...todo, newToDoS]);
      setfirstName("");
      setlastName("");
      setuserName("");
      setAge("");
      setSalary("");
    }

    setActive(false);
  };

  localStorage.setItem("todos", JSON.stringify(todo));

  const handleDelete = (id) => {
    const deleteTodo = todo.filter((item) => item.id !== id);
    setTodos(deleteTodo);
  };

  const handleEdit = (id) => {
    const toDoEdit = todo.find((todo) => todo.id === id);
    // console.log(toDoEdit, "asas");
    setEditingTodo(id);
    setfirstName(toDoEdit.firstName);
    setlastName(toDoEdit.lastName);
    setuserName(toDoEdit.userName);
    setAge(toDoEdit.age);
    setSalary(toDoEdit.salary);
    return setActive(true);
  };

  const modal = () => {
    return setActive(!active);
  };

  return (
    <>
      <section className="userList">
        <div className="container">
          <div className="userList_items">
            <div className="userList_items_title">
              <h3>{t("to-do")}</h3>
            </div>
            <div className="userList_items_addUserBtn">
              <button onClick={modal}>ADD USER</button>
            </div>
            <div className="userList_items_table">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody id="tbody">
                  {todo?.map((element) => (
                    <tr key={element.id}>
                      <td>{element.USERid}</td>
                      <td>{element.firstName}</td>
                      <td>{element.lastName}</td>
                      <td>{element.userName}</td>
                      <td>{element.age}</td>
                      <td>{element.salary}</td>

                      <td>
                        <i
                          className="ri-pencil-fill edit"
                          onClick={() => handleEdit(element.id)}
                        ></i>
                      </td>
                      <td>
                        <i
                          className="ri-delete-bin-7-fill delete"
                          onClick={() => handleDelete(element.id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={`modal ${!active ? "active" : ""}`}>
          <div className="modal_card">
            <i
              className={`ri-close-circle-fill ${active ? "" : "active"}`}
              onClick={() => setActive(false)}
            ></i>
            <form onSubmit={handleChangeSubmit}>
              <h4>Add User</h4>
              <div className="inputDiv">
                <input
                  type="text"
                  value={firstName}
                  onChange={handleChangeEventFirstName}
                  placeholder="Last Name"
                />
              </div>
              <div className="inputDiv">
                <input
                  type="text"
                  value={lastName}
                  onChange={handleChangeEventLastName}
                  placeholder="First Last"
                />
              </div>
              <div className="inputDiv">
                <input
                  type="text"
                  value={userName}
                  onChange={handleChangeEventuserName}
                  placeholder="Username"
                />
              </div>
              <div className="inputDiv">
                <input
                  type="text"
                  value={age}
                  onChange={handleChangeEventAge}
                  placeholder="Age"
                />
              </div>
              <div className="inputDiv">
                <input
                  type="text"
                  value={salary}
                  onChange={handleChangeEventSalary}
                  placeholder="Salary"
                />
              </div>

              <div className="buttonDiv">
                <button className="buttonSubmit" type="submit">
                  {editingTodos !== null ? "Save" : "Submit"}
                </button>
                {editingTodos !== null && (
                  <button
                    type="submit"
                    onClick={() => {
                      setEditingTodo(null);
                      modal();
                      setfirstName("");
                      setlastName("");
                      setuserName("");
                      setAge("");
                      setSalary("");
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserList;
