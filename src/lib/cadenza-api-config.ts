import { readFileSync } from "fs";
import { GoogleAuth, JWT } from "google-auth-library";

export async function getServiceAccountJwtFromADC() {
  // Create a GoogleAuth client which will automatically pick up the ADC
  const googleAuth = new GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: [], // Specify scopes if required, leave empty for ID tokens
  });

  // Acquire an ID token client for the target audience
  const client = await googleAuth.getIdTokenClient(
    "32555940559.apps.googleusercontent.com"
  );

  // Request the ID token for the target audience
  const res = await client.request({ url: "https://service-to-call" });

  // The ID token should be in the headers of the response
  const idToken = res.headers["authorization"].split(" ")[1];

  return idToken;
}

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
