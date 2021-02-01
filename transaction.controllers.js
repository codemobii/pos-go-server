const Transaction = require("./transaction.model");

exports.create = async (request, response) => {
  const transaction = new Transaction({
    trnsType: request.body.trnsType,
    amount: request.body.amount,
    commission: request.body.commission,
    customer: request.body.customer,
  });
  transaction
    .save()
    .then((result) => {
      response.status(200).send({
        message: "Transaction added successfully",
        result,
      });
    })
    .catch((error) => {
      response.status(500).send({
        message: "Error adding transaction",
        error,
      });
    });
};

// Calculate Commision

exports.commission = async (request, response) => {
  const amount = parseFloat(request.body.amount);

  const commission = amount <= 9000 ? 100 : (amount / 10000) * 100;

  if (commission) {
    response.status(200).send({
      commission,
    });
  }
};

// Get Transactions

exports.get = (request, response) => {
  Transaction.find()
    .then((transactions) => {
      //   return success response
      response.status(200).send({
        message: "Success",
        transactions,
      });
    })
    .catch((err) => {
      response.status(500).send({
        message: "Some error occurred while retrieving transactions.",
        err,
      });
    });
};
