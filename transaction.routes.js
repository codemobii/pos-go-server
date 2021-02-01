module.exports = (app) => {
  const transactions = require("./transaction.controllers");

  // Update user
  app.post("/create", transactions.create);

  // Get user
  app.post("/commission", transactions.commission);

  // Get user
  app.get("/get", transactions.get);
};
