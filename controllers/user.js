const RESTUser = require("../models/user");

exports.retrieveRestUser = (req, res) => {
  return res.status(200).json("hi");
};

exports.createUser = (req, res) => {
  const newRestUser = new RESTUser({
    name: req.body.name,
    age: req.body.age,
    image: req.file.path,
  });

  newRestUser.save().then((result, error) => {
    console.log(req.file);
    if (error) {
      return res.status(400).json(error);
    }

    if (result) {
      return res.status(201).json("New user created successfully");
    }
  });
};
