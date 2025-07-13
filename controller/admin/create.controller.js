const createAdmin = (req, res) => {
  console.log("admin auth is checked..");
  res.send("admin create");
};

module.exports = createAdmin;
