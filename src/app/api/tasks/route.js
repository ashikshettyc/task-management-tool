import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch tasks', error }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(req) {
  const { name, description, dueDate, priority, createdBy } = await req.json();

  try {
    const task = await prisma.task.create({
      data: {
        name,
        description,
        dueDate: new Date(dueDate),
        priority,
        createdBy,
      },
    });
    return new Response(JSON.stringify(task), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to create task', error }),
      { status: 500 }
    );
  }
}
