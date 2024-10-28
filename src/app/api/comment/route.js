import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { taskId, message, userId } = await req.json();

    if (!taskId || !userId || !message) {
      return new Response(
        JSON.stringify({
          error: 'taskId, userId, and message are required fields.',
        }),
        {
          status: 400,
        }
      );
    }

    const createComment = await prisma.comment.create({
      data: {
        message,
        taskId,
        userId,
      },
    });

    return new Response(JSON.stringify(createComment), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}

export async function GET() {
  try {
    const allComments = await prisma.comment.findMany({
      include: {
        task: true,
        user: true,
      },
    });
    return new Response(JSON.stringify(allComments), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}
