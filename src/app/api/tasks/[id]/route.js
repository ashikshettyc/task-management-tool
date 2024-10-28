import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req, context) {
  const { id } = await context.params;
  const { name, description, dueDate, priority, status } = await req.json();

  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        dueDate,
        priority,
        status,
      },
    });
    return new Response(JSON.stringify(updatedTask), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}
