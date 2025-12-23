import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import type { Todo, CreateTodoData } from '@/types/todo';
import { todoService } from '@/services/todoService';
import { toast } from 'sonner';

export function TodoApp(): ReactElement {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const loadTodos = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const data = await todoService.getTodos();
      setTodos(data);
    } catch (error) {
      toast.error('Failed to load todos');
      console.error('Failed to load todos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadTodos();
  }, []);

  const handleCreateTodo = async (data: CreateTodoData): Promise<void> => {
    try {
      await todoService.createTodo(data);
      toast.success('Todo created');
      setShowForm(false);
      await loadTodos();
    } catch (error) {
      toast.error('Failed to create todo');
      throw error;
    }
  };

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-lg'>Loading...</div>
      </div>
    );
  }

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className='min-h-screen bg-background p-4 md:p-8'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <Card>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <CardTitle>Todo App</CardTitle>
              <Button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Todo'}
              </Button>
            </div>
            <p className='text-sm text-muted-foreground'>
              {totalCount === 0
                ? 'No todos'
                : `${completedCount} of ${totalCount} completed`}
            </p>
          </CardHeader>
        </Card>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>Create New Todo</CardTitle>
            </CardHeader>
            <CardContent>
              <TodoForm
                onSubmit={handleCreateTodo}
                onCancel={() => {
                  setShowForm(false);
                }}
              />
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Todos</CardTitle>
          </CardHeader>
          <CardContent>
            <TodoList todos={todos} onUpdate={loadTodos} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

