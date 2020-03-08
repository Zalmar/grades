const { Router } = require("express");
const User = require("../models/user");

const router = Router();

// create /api/crud/create
router.post("/create", async (req, res) => {
  try {
    const { firstName, age } = req.body;
    const user = new User({ firstName, age });
    await user.save();
    res.status(201).json({ status: "success", message: "Create user" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get /api/crud/users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ status: "success", users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update /api/crud/update
router.put("/update", async (req, res) => {
  try {
    const { firstName, age, id } = req.body;
    const user = await User.findById(id);
    user.firstName = firstName;
    user.age = age;
    await user.save();
    res.status(201).json({ status: "success", message: "Update user" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete /api/crud/delete
router.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    await user.remove();
    res.status(201).json({ status: "success", message: "Delete user" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
