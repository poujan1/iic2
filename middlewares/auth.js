const auth = (req, res, next) => {
  const isSamePerson = "pujan";
  if (isSamePerson === "pujan") {
    next();
  } else {
    res.send("unauthorized");
  }
};
module.exports = auth;
