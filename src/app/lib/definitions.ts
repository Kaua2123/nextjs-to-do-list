// arquivo onde se localiza as tipagens

type Tags = 'social' | 'trabalho' | 'pessoal';
export type Status = 'pending' | 'in_progress' | 'completed';

export type Task = {
  id: string;
  name: string;
  description: string;
  tags: Tags;
  status: Status;
  created_at: string;
  updated_at: string;
};

export type User = {
  id: string;
  email: string;
  password: string;
};
