const adminAuth = (req, res, next) => {
  const name = "pujan";
  if (name === "pujan") {
    next();
  } else {
    res.send("unauthorized");
  }
};
const userAuth = (req, res, next) => {
  const name = "pujan";
  if (name === "pujan") {
    next();
  } else {
    res.send("unauthorized");
  }
};

module.exports = { adminAuth, userAuth };
