module.exports = (req, res) => {
  const { searchTerm } = req.params;
  console.log(searchTerm);
  return res.status(200).send();
};