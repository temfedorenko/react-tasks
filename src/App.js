import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState, useEffect } from "react";

import { TodoList } from "./components/TodoList/TodoList";
import { TodoFilter } from "./components/TodoFilter/TodoFilter";
import { TodoModal } from "./components/TodoModal/TodoModal";
import { Loader } from "./components/Loader/Loader";
import { getTodos, getUser } from "./api";

const App = () => {
  const [todos, setTodos] = useState([]);
  // modal
  const [selectedTodo, setSelectedTodo] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [selectedUserId, setSelectedUserId] = useState();
  // filter
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!selectedUserId) {
      return;
    }

    getUser(selectedUserId)
      .then(setSelectedUser)
      .catch((err) => console.log(err));
  }, [selectedUserId]);

  const handleModalOpen = (todo) => {
    setSelectedTodo(todo);
    setSelectedUserId(todo.userId);
  };

  const handleModalClose = () => {
    setSelectedUserId(0);
    setSelectedUser(0);
  };

  const handleSelectChange = (value) => {
    setFilter(value);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const filterTodos = (filter) => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed === true);
      case "active":
        return todos.filter((todo) => todo.completed === false);
      default:
        return todos;
    }
  };

  const searchTodos = (arr, query) => {
    if (query.length === 0) {
      return arr;
    }
    return arr.filter((todo) => todo.title.toLowerCase().includes(query.toLowerCase()));
  };

  // const filteredTodos =
  //   filter === "all"
  //     ? todos
  //     : filter === "completed"
  //     ? todos.filter((todo) => todo.completed === true)
  //     : todos.filter((todo) => todo.completed === false);

  // const visibleData = filteredTodos.filter((todo) =>
  //   todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const visibleData = searchTodos(filterTodos(filter), searchQuery);
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter
                filter={filter}
                searchQuery={searchQuery}
                onSelectChange={handleSelectChange}
                onSearchChange={handleSearchChange}
              />
            </div>

            <div className="block">
              {todos.length === 0 ? (
                <Loader />
              ) : (
                <TodoList todos={visibleData} onModalOpen={handleModalOpen} />
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedUserId && (
        <TodoModal user={selectedUser} todo={selectedTodo} onModalClose={handleModalClose} />
      )}
    </>
  );
};

export default App;
