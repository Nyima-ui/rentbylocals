import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "pseudoData.json");

async function writeJson(data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error reading and writing to json file: ${error}`);
  }
}

async function readJson() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
  }
}

function isMultiple(number, multipleOf) {
  const isMultipleOf = number % multipleOf;
  if (isMultipleOf === 0) {
    return true;
  } else {
    return false;
  }
}
async function updateJson() {
  try {
    const existingData = await readJson();
    const updatedData = existingData.map((item, idx) => {
      if (isMultiple(idx + 1, 2)) {
        return {
          ...item,
          images: ["/boots.webp"],
        };
      } else if (isMultiple(idx + 1, 3)) {
        return {
          ...item,
          images: ["/ringSet.webp"],
        };
      } else if (isMultiple(idx + 1, 4)) {
        return {
          ...item,
          images: ["/bicycle.webp"],
        };
      } else if (isMultiple(idx + 1, 5)) {
        return {
          ...item,
          images: ["/tyres.webp"],
        };
      } else {
        return item;
      }
    });
    await writeJson(updatedData);
  } catch (error) {
    console.error(`Error updating json: ${error}`);
  }
}

updateJson();


function handleClickOutside(){
  
}