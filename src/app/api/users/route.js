import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function POST(req) {
  const { name, email, password } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}

export async function GET() {
  try {
    const user = await prisma.user.findMany();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}
