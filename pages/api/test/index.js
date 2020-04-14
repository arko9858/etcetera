
export default async (req, res) => {
  const {method} = req

  if (method === "GET") {
    res.status(200).send("It's working")
  } else {
    res.status(405).json({msg: "invalid request"})
  } 
}