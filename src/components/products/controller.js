/**
 * Routes for products
 */

export const getProducts = (req, res) => {
  res.status(200).json({
    ok: true,
    body: "Testing ci/cd Luis Marina  with Docker",
  });
};
