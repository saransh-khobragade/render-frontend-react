import type { ReactElement } from 'react';
import { TodoItem } from './TodoItem';
import type { Todo } from '@/types/todo';

interface TodoListProps {
  todos: Todo[];
  onUpdate: () => void;
}

export function TodoList({ todos, onUpdate }: TodoListProps): ReactElement {
  if (todos.length === 0) {
    return (
      <div className='text-center py-8 text-muted-foreground'>
        No todos yet. Create your first todo!
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

