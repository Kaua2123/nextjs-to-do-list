// // funções de fetch. podem ser executadas no client-side, por isso, não são server actions.
// // além disso, não têm a cláusula 'use server'

import { pool } from './db';
import { Task } from './definitions';

export async function fetchTasks() {
  try {
    console.log('fetching tasks...');

    if (!pool) return;
    const tasks = await pool.query<Task>('SELECT * from tasks');

    return tasks.rows;
  } catch (error) {
    console.log(error);
    throw new Error('Falha ao tentar buscar tarefas.');
  }
}
