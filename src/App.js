import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import { About } from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log('I am onDelete of todo', todo);

    setTodos(todos.filter((currentTodo) => {
      return currentTodo !== todo;
    }))
  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, desc) => {
    console.log('I am adding this Todo', title, '   ', desc);

    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    console.log(myTodo);

    setTodos([...todos, myTodo]);

  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <Router>
      <Header title={"My Todos List"} searchBar={false} />
      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        }>
        </Route>
        <Route exact path="/about" element={<About />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
