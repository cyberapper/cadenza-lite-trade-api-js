export const CADENZA_BASE_PATH = process.env.CADENZA_BASE_PATH || "";

if (CADENZA_BASE_PATH === "") {
  console.log("The CADENZA_BASE_PATH environment variable is not set.");
  process.exit(1); // Exit the process if the model is not set
}
