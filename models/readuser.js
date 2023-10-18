import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }
  await prisma.$disconnect();
};
