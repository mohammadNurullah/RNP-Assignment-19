import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "PUT") {
    const { id, ...userUpdates } = req.body;
    try {
      const user = await prisma.user.update({
        where: { id },
        data: userUpdates,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error updating user." });
    }
  }
  await prisma.$disconnect();
};
