// arquivo onde se localiza as tipagens

type Tags = 'social' | 'trabalho' | 'pessoal';
export type Status = 'pending' | 'in progress' | 'completed';

export type Task = {
  id: string;
  name: string;
  description: string;
  tags: Tags;
  status: Status;
  created_at: string;
  updated_at: string;
};
