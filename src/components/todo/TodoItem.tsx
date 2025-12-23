import type { ReactElement } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Todo } from '@/types/todo';
import { todoService } from '@/services/todoService';
import { toast } from 'sonner';

interface TodoItemProps {
  todo: Todo;
  onUpdate: () => void;
}

export function TodoItem({ todo, onUpdate }: TodoItemProps): ReactElement {
  const [isToggling, setIsToggling] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggle = async (): Promise<void> => {
    setIsToggling(true);
    try {
      await todoService.toggleTodo(todo.id);
      toast.success(
        todo.completed ? 'Todo marked as incomplete' : 'Todo marked as complete',
      );
      onUpdate();
    } catch (error) {
      toast.error('Failed to toggle todo');
      console.error('Failed to toggle todo:', error);
    } finally {
      setIsToggling(false);
    }
  };

  const handleDelete = async (): Promise<void> => {
    if (!confirm('Are you sure you want to delete this todo?')) {
      return;
    }

    setIsDeleting(true);
    try {
      await todoService.deleteTodo(todo.id);
      toast.success('Todo deleted');
      onUpdate();
    } catch (error) {
      toast.error('Failed to delete todo');
      console.error('Failed to delete todo:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card className={todo.completed ? 'opacity-60' : ''}>
      <CardHeader>
        <div className='flex items-start justify-between'>
          <CardTitle
            className={
              todo.completed
                ? 'line-through text-muted-foreground'
                : 'text-foreground'
            }
          >
            {todo.title}
          </CardTitle>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={handleToggle}
              disabled={isToggling || isDeleting}
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button
              variant='destructive'
              size='sm'
              onClick={handleDelete}
              disabled={isToggling || isDeleting}
            >
              Delete
            </Button>
          </div>
        </div>
      </CardHeader>
      {todo.description && (
        <CardContent>
          <p
            className={
              todo.completed
                ? 'line-through text-muted-foreground'
                : 'text-foreground'
            }
          >
            {todo.description}
          </p>
        </CardContent>
      )}
    </Card>
  );
}

