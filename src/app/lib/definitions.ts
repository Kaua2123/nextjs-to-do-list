// arquivo onde se localiza as tipagens

type Tags = 'social' | 'trabalho' | 'pessoal';
type Status = 'pending' | 'in progress' | 'completed';

export type Task = {
  id: number;
  name: string;
  description: string;
  tags: Tags;
  status: Status;
  created_at: string;
  updated_at: string;
};
