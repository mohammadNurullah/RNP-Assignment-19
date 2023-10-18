import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "DELETE") {
    const id = parseInt(req.body.id);
    try {
      await prisma.user.delete({
        where: { id },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Error deleting user." });
    }
  }
  await prisma.$disconnect();
};
