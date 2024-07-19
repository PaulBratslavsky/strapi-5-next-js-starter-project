const fs = require("fs");
const path = require("path");

function copyEnvFile(targetDir) {
  // Ensure targetDir is a valid string and trim any whitespace
  targetDir = typeof targetDir === "string" ? targetDir.trim() : "";

  const examplePath = path.join(targetDir, ".env.example");
  const envPath = path.join(targetDir, ".env");

  console.log("Attempting to copy from:", examplePath);
  console.log("To:", envPath);

  // Check if .env.example exists
  fs.access(examplePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`.env.example file does not exist in ${targetDir}`);
      return;
    }

    // .env.example exists, now check for .env
    fs.access(envPath, fs.constants.F_OK, (err) => {
      if (err) {
        // .env file does not exist, copy .env.example to .env
        fs.copyFile(examplePath, envPath, (err) => {
          if (err) {
            console.error("Error occurred:", err);
            return;
          }
          console.log(`.env.example has been copied to ${envPath}`);
        });
      } else {
        // .env file exists, no action needed
        console.log(
          `.env file already exists in ${targetDir}, no action taken.`
        );
      }
    });
  });
}

// Get the directory path from the command line argument and trim whitespace
const directoryPath = process.argv[2]?.trim();

if (directoryPath) {
  copyEnvFile(directoryPath);
} else {
  console.error("Please provide a directory path as an argument.");
}