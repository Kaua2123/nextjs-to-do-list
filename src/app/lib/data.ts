// // funções de fetch. podem ser executadas no client-side, por isso, não são server actions.
// // além disso, não têm a cláusula 'use server'

import { pool } from './db';
import { Task } from './definitions';

const TASKS_PER_PAGE = 6;

export async function fetchTasksById(id: string) {
  try {
    if (!pool) return;

    console.log('fetching task...');

    const tasks = await pool.query<Task>(
      `SELECT * FROM TASKS WHERE tasks.id = $1`,
      [`${id}`],
    );

    return tasks.rows;
  } catch (error) {
    console.log(error);
    throw new Error(`Falha ao tentar buscar tarefa de id ${id}.`);
  }
}

export async function fetchFilteredTasks(query: string, currentPage: number) {
  try {
    if (!pool) return;

    console.log('fetching task with query: ', query);

    const tasks = await pool.query<Task>(
      `SELECT * FROM TASKS WHERE tasks.name LIKE $1 ORDER BY tasks.name LIMIT 6 OFFSET ($2 - 1) * 6 `,
      [`%${query}%`, `${currentPage}`],
    );

    return tasks.rows;
  } catch (error) {
    console.log(error);
    throw new Error(`Falha ao tentar buscar tarefa: ${query}.`);
  }
}

export async function fetchTasksPages(query: string) {
  try {
    if (!pool) return;

    console.log('fetching task with query: ', query);

    const result = await pool.query<{ count: string }>( // contar os registros
      `SELECT COUNT(*) AS count FROM TASKS WHERE tasks."name" LIKE $1`,
      [`%${query}%`],
    );

    const totalTasks = parseInt(result.rows[0].count, 10);
    return Math.ceil(totalTasks / TASKS_PER_PAGE);
  } catch (error) {
    console.log(error);
    throw new Error(
      `Falha ao tentar buscar páginas de tarefas com a query: ${query}.`,
    );
  }
}
