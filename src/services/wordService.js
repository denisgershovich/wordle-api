import clientPromise from "../lib/mongodb.js";

const client = await clientPromise;

async function getRandomWord() {
  try {
    const db = client.db("wordle");
    const collection = db.collection("dictionary");

    const randomWordDoc = await collection
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();

    return randomWordDoc[0]?.word || null;
  } catch (error) {
    console.error("Error fetching random word:", error);
    throw error;
  }
}

export { getRandomWord };
