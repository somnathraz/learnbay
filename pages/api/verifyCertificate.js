import { connectToDatabase } from "../../lib/mongodb";
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const { id } = req.body;

  if (req.method === "POST") {
    try {
      const getCertificate = await db.collection("certificateData").findOne({
        id: id,
      });
      if (getCertificate) {
        res
          .status(200)
          .json({ certificate: getCertificate, msg: "Certificate Found" });
      } else {
        res
          .status(404)
          .json({ certificate: getCertificate, msg: "Certificate Not Found" });
      }
    } catch (error) {
      res.status(502).json({ msg: error });
    }
  }
}
