import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const TodoForm = ({ addTodo, editTodo, editMode, handleClose, todoToEdit }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editMode && todoToEdit) {
      setTask(todoToEdit.task);
    }
  }, [editMode, todoToEdit]);

  const handleInputChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editMode && todoToEdit) {
      editTodo(todoToEdit.id, task);
   } else {
      addTodo({
        id: Math.floor(Math.random() * 100000),
        task,
        completed: false
      });
    }
    setTask('');
    handleClose();
  };

  return (
    <Dialog open={editMode || false} onClose={handleClose}>
      <DialogTitle>{editMode ? 'Edit Todo' : 'Add Todo'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField label="Task" fullWidth autoFocus value={task} onChange={handleInputChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">{editMode ? 'Save' : 'Add'}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TodoForm;