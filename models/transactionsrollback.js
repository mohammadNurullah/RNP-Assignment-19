const transaction = await prisma.$transaction();

try {
  // database operations here
  await transaction.commit();
} catch (error) {
  await transaction.rollback();
}
