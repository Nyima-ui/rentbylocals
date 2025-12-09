import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "pseudoData.json");

async function readAndWriteJson() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    let existingData = JSON.parse(data);
    const desiredLink = existingData[0].images[0];
    const updatedData = existingData.map((item) => {
      return {
        ...item,
        images: [desiredLink],
      };
    });
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error reading and writing to json file: ${error}`);
  }
}
readAndWriteJson();
