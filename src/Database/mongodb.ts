import { configDotenv } from "dotenv";
import { RequestHandler } from "express";
import { MongoClient } from "mongodb";

export const createStudents = async () => {
  configDotenv();
  const uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const data = await client.db("school");
    const user = await data.collection("student");
    user.insertMany([
      {
        name: "Bilguun",
        age: "10",
        gpa: "4",
      },
      {
        name: "Horloo",
        gpa: 3.9,
        age: "10",
      },
      {
        name: "Muugii",
        gpa: 3.8,
        age: "10",
      },
      {
        name: "Ochiroo",
        gpa: 3,
        age: "10",
      },
      {
        name: "Sapar",
        gpa: 2.8,
        age: "10",
      },
      {
        name: "Zulaa",
        gpa: 2.7,
        age: "10",
      },
      {
        name: "Batzorig",
        gpa: 3.6,
        age: "10",
      },
      {
        name: "Tsetseg",
        gpa: 3.9,
        age: "10",
      },
      {
        name: "Ganbaa",
        gpa: 3.2,
        age: "10",
      },
      {
        name: "Anujin",
        gpa: 3.5,
        age: "10",
      },
      {
        name: "Narantuya",
        gpa: 3.1,
        age: "10",
      },
      {
        name: "Otgonbayar",
        gpa: 3.7,
        age: "10",
      },
      {
        name: "Delgermaa",
        gpa: 3,
        age: "10",
      },
      {
        name: "Erdene",
        gpa: 2.5,
        age: "10",
      },
      {
        name: "Suvd",
        gpa: 3.4,
        age: "10",
      },
      {
        name: "Munkhbat",
        gpa: 3.9,
        age: "10",
      },
    ]);
    // res.status(201).json({ message: "success", data: user });
  } catch (error) {
    // res.status(500).json({ message: "error", error });
    console.log(error);
  }
};

export const aaaa = async () => {
  configDotenv();
  const uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const data = await client.db("school");
    const user = await data.collection("student");
    const end = user.find().toArray();
    return end;
    // res.status(201).json({ message: "success", data: user });
  } catch (error) {
    // res.status(500).json({ message: "error", error });
    console.log(error);
  }
};
export const update = async () => {
  configDotenv();
  const uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const data = await client.db("school");
    const user = await data.collection("student");
    const end = user.updateOne({ name: "Bilguun" }, { $set: { age: 100 } });
    return end;
    // res.status(201).json({ message: "success", data: user });
  } catch (error) {
    // res.status(500).json({ message: "error", error });
    console.log(error);
  }
};
export const deletename = async () => {
  configDotenv();
  const uri = process.env.MONGODB_URI || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const data = await client.db("school");
    const user = await data.collection("student");
    const end = user.deleteOne({ name: "Bilguun" });
    return end;
    // res.status(201).json({ message: "success", data: user });
  } catch (error) {
    // res.status(500).json({ message: "error", error });
    console.log(error);
  }
};

{
  /*user.insertMany([
      {
        name: "Bilguun",
        gpa: 4,
      },
      {
        name: "Horloo",
        gpa: 3.9,
      },
      {
        name: "Muugii",
        gpa: 3.8,
      },
      {
        name: "Ochiroo",
        gpa: 3,
      },
      {
        name: "Sapar",
        gpa: 2.8,
      },
      {
        name: "Zulaa",
        gpa: 2.7,
      },
      {
        name: "Batzorig",
        gpa: 3.6,
      },
      {
        name: "Tsetseg",
        gpa: 3.9,
      },
      {
        name: "Ganbaa",
        gpa: 3.2,
      },
      {
        name: "Anujin",
        gpa: 3.5,
      },
      {
        name: "Narantuya",
        gpa: 3.1,
      },
      {
        name: "Otgonbayar",
        gpa: 3.7,
      },
      {
        name: "Delgermaa",
        gpa: 3,
      },
      {
        name: "Erdene",
        gpa: 2.5,
      },
      {
        name: "Suvd",
        gpa: 3.4,
      },
      {
        name: "Munkhbat",
        gpa: 3.9,
      },
    ]);
    put == update
    */
}
