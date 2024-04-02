import * as path from "path";
import * as fs from "fs";

export async function readConfig(): Promise<any> {
  const configFilePath = path.join(__dirname, "../resourses", "config.json");

  return new Promise((resolve, reject) => {
    fs.readFile(configFilePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const config = JSON.parse(data);
          resolve(config);
        } catch (error) {
          reject(error);
        }
      }
    });
  });
}
