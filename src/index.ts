import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import { aaaa, createStudents } from "./Database/mongodb";

configDotenv();
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.post("/food", async (req, res) => {
  try {
    const students = await createStudents();
    res.status(201).json({ message: "check", data: students });
  } catch (error) {
    res.status(500).json({ messege: "error", Error: error });
  }
});

app.get("/food", async (req, res) => {
    try {
      const students = await aaaa();
      res.status(201).json({ students });
    } catch (error) {
      res.status(500).json({ messege: "error", error });
    }
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
