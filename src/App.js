import React, { useState } from 'react';
import { Container, Grid, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import Navbar from './composant/Navbar';
import TodoList from './composant/TodoList';
import TodoForm from './composant/TodoForm';
import Footer from './composant/Footer';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodoComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  const handleEditClick = todo => {
    setEditMode(true);
    setTodoToEdit(todo);
  };

  const handleEditClose = () => {
    setEditMode(false);
    setTodoToEdit(null);
  };

  const editTodo = (id, task) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            task
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} deleteTodo={deleteTodo} handleEditClick={handleEditClick} />
          </Grid>
        </Grid>
      </Container>
      <TodoForm addTodo={addTodo} editTodo={editTodo} editMode={editMode} handleClose={handleEditClose} todoToEdit={todoToEdit} />
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: '16px', right: '16px' }} onClick={() => setEditMode(true)}>
        <Add />
      </Fab>
      <Footer />
    </>
  );
};

export default App;