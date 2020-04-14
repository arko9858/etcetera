export default (req, res) => {
  const {method} = req

  //   if (method === "GET") {
  //     res.status(200).send("It's working")
  //   } else {
  const message = method ? method : "Error" + " request"
  res.json({msg: message})
  //   }
}
