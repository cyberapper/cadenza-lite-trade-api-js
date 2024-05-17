import { readFileSync } from "fs";
import { JWT } from "google-auth-library";

export async function getServiceAccountJwt(path: string) {
  // Load the service account key from a file
  const serviceAccountKey = JSON.parse(readFileSync(path, "utf8"));

  // Create a JWT client with the service account key
  const jwtClient = new JWT({
    email: serviceAccountKey.client_email,
    key: serviceAccountKey.private_key,
    // Do not specify scopes when you want to fetch an ID token
  });

  // The URL or resource that you want the ID token for (the audience)
  const targetAudience = "32555940559.apps.googleusercontent.com";

  // Fetch the ID token for the target audience
  const idToken = await jwtClient.fetchIdToken(targetAudience);

  return idToken;
}
