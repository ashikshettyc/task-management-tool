import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { taskId, message, userId } = req.body;
  if (req.method === 'POST') {
    try {
      const comment = await prisma.comment.create({
        data: {
          message,
          taskId,
          userId,
        },
      });
      res.status(200).json(comment);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(500).json({ error: "Unable to create comment" });
    }
  }
}
