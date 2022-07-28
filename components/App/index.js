import React from 'react';
import { TodoProvider } from '@src/TodoContext';
import { AppUI } from '@components/App/AppUI';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
