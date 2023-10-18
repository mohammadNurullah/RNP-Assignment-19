import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const user = await prisma.user.create({
        data: req.body,
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creating user." });
    }
  }
  await prisma.$disconnect();
};
