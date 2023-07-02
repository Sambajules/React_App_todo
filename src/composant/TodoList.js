import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TodoList = ({ todos, toggleTodoComplete, deleteTodo, handleEditClick }) => {
  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id} button onClick={() => toggleTodoComplete(todo.id)}>
          <ListItemText primary={todo.task} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(todo)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;