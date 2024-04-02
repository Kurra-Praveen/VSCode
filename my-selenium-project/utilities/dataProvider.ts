import * as path from "path";
import * as fs from "fs";

export async function getTestData(): Promise<any[]> {
  const configFilePath = path.join(__dirname, "../config_files", "config.json");

  return new Promise<any[]>((resolve, reject) => {
    fs.readFile(configFilePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const config = JSON.parse(data);
          resolve(config.testData);
        } catch (error) {
          reject(error);
        }
      }
    });
  });
}
