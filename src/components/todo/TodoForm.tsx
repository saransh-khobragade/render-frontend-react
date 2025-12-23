import type { ReactElement } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { CreateTodoData, UpdateTodoData } from '@/types/todo';

interface TodoFormProps {
  onSubmit: (data: CreateTodoData | UpdateTodoData) => Promise<void>;
  onCancel?: () => void;
  initialData?: { title: string; description?: string };
  submitLabel?: string;
}

export function TodoForm({
  onSubmit,
  onCancel,
  initialData,
  submitLabel = 'Create',
}: TodoFormProps): ReactElement {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [description, setDescription] = useState(
    initialData?.description ?? '',
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({ title: title.trim(), description: description.trim() });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Failed to submit todo:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='title'>Title</Label>
        <Input
          id='title'
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
          placeholder='Enter todo title'
          required
          disabled={isSubmitting}
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='description'>Description (optional)</Label>
        <Input
          id='description'
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
          placeholder='Enter todo description'
          disabled={isSubmitting}
        />
      </div>
      <div className='flex gap-2'>
        <Button type='submit' disabled={isSubmitting || !title.trim()}>
          {submitLabel}
        </Button>
        {onCancel && (
          <Button type='button' variant='outline' onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

