import React from 'react';
import { TodoContext } from '@src/TodoContext';
import { TodoCounter } from '@components/TodoCounter';
import { TodoList } from '@components/TodoList';
import { TodoItem } from '@components/TodoItem';
import { TodosError } from '@components/TodosError';
import { TodosLoading } from '@components/TodosLoading';
import { EmptyTodos } from '@components/EmptyTodos';
import { ModalTodo } from '@components/Modal';
import NavBar from "@components/Navbar/Narbar";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
		<NavBar />	
      <TodoCounter />

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
	  <ModalTodo  setOpenModal={setOpenModal} openModal={openModal}/>
   
    </React.Fragment>
  );
}

export { AppUI };
