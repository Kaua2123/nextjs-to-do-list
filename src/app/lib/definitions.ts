// arquivo onde se localiza as tipagens

export type Task = {
  id: number;
  name: string;
  description: string;
  tags: 'social' | 'trabalho' | 'pessoal';
  status: 'pending' | 'in progress' | 'completed';
  created_at: string;
  updated_at: string;
};
