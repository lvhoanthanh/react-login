const Class = require("../models/Class");
const { createClassValidation } = require("../validation");

const classController = {
  getAllClasses: async (req, res) => {
    const classes = await Class.find();
    if (classes) {
      res.status(200).json(classes);
    } else {
      res.status(404).json("Data not found!");
    }
  },
  createClass: async (req, res) => {
    const { error } = createClassValidation(req.body);
    if (error) {
      console.log(error.details[0].message);
      return res.status(400).send(error.details[0].message);
    }
    const classCodeExist = await Class.findOne({
      code: req.body.code,
    });
    if (classCodeExist) {
      return res.status(400).send("Class code already exists!!!");
    }
    let data = new Class({
      code: req.body.code,
      name: req.body.name,
    });
    try {
      const saveClass = await data.save();
      res.send({
        _id: data._id,
        message: "Register successfully!",
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};

module.exports = classController;
