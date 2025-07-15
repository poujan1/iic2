const User = require("../../model/user");

// schema level validation

const createUser = async (req, res) => {
  const { firstname, lastname, username, email, age } = req.body;

  if (!lastname || !username || !email || !age) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }
  //   const user = new User();
  const createUser = await User.create({
    firstname,
    lastname,
    email,
    username,
    age,
  });

  //   await user.save();
  res.status(201).json({
    success: true,
    data: createUser,
  });
};

module.exports = { createUser };
