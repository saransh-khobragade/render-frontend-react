import './App.css';
import type { ReactElement } from 'react';
import { TodoApp } from '@/components/todo/TodoApp';
import { Toaster } from '@/components/ui/sonner';

function App(): ReactElement {
  return (
    <div className='min-h-screen bg-background'>
      <TodoApp />
      <Toaster />
    </div>
  );
}

export default App;
