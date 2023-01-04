import Header from "./components/Header";
import Footer from "./components/Footer";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { About } from "./components/About";

function App() {
  let initTodo;
  const [todos, setTodos] = useState(initTodo);

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo = ", todo);
    setTodos(
      todos.filter((t) => {
        return t != todo;
      })
    );
    localStorage.getItem("todos");
  };

  const addTodo = (title, desc) => {
    let sno = todos.length + 1;
    const myTodo = {
      title: title,
      desc: desc,
      sno: sno,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Router>
        <Header title="MyTodosList" />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo}></AddTodo>
                  <Todos todos={todos} onDelete={onDelete} />
                  <Link
                    to={{
                      pathname: "/about",
                      state: { id: 1, name: "sabaoon", shirt: "green" },
                    }}
                  >
                    Learn More
                  </Link>
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
