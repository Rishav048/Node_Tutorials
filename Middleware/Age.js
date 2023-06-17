function AgeCheck(req, res, next) {
  if (!req.query.age) res.send("Please Provide Age....!");
  else if (req.query.age < 18) res.send("You are not allowed ...!");
  else next();
}

module.exports = {
  AgeCheck,
};
