const averageRating = await prisma.productReview.aggregate({
  _avg: {
    rating: true,
  },
});
