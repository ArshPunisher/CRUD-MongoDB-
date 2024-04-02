const customerModel = require("../models/customer");

exports.Homepage = (req, res) => {
  res.send("<h1>This is a CRUD Application</h1>");
};

exports.Customerpage = async (req, res) => {
  try {
    const customerData = await customerModel.find({}).limit(12);
    res.send(customerData);
  } catch (error) {
    console.log("Customer Retrival Error", error.message)
  }
};

exports.Addpage = async (req, res) => {
  try {
    const { firstname, lastname, email, textarea, gender } = req.body;
    console.log("DATA", req.body);
    const user = await customerModel.create({
      firstname,
      lastname,
      email,
      textarea,
      gender,
    });
    console.log("USER", user)
    res.status(201).json({ msg: "Done puttarr" });
  } catch (error) {
    console.log("Add Section Error", error.message)
  }

};

exports.editDetails = async (req, res) =>{
  try {
    const userId = req.params.id;
    const data = await customerModel.findOne({_id: userId})
    res.send(data)
  } catch (error) {
    console.log("Node Error Edit Details", error.message)
  }
}

exports.updateDetails = async (req, res) =>{
  try {
    const userId = req.params.id;
    console.log("N PARAMS", userId)
    const {firstname, lastname, email, textarea, gender} = req.body;
    await customerModel.findByIdAndUpdate(userId, {firstname, lastname, email, textarea, gender})
    console.log("Updated DATA")
    res.status(201).send("ok")
  } catch (error) {
    console.log("Node Error Update Details", error.message)
  }
}

exports.deleteDetails = async (req, res)=>{
  try {
    await customerModel.deleteOne({ _id: req.params.id})
    res.status(200).send("Ok")
  } catch (error) {
    console.log("Delete Section Error", error.message)
  }
}