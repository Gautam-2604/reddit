import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// For debugging, check if the token exists (don't log the full token in production)
console.log("Token exists:", !!process.env.SANITY_API_ADMIN_TOKEN);

export const adminClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_ADMIN_TOKEN,
  // Add this to see more detailed error information
  ignoreBrowserTokenWarning: true,
  
});

// Test function to verify token
export async function testAdminAccess() {
  try {
    // Attempt a simple read operation
    const result = await adminClient.fetch('*[_type == "user"][0]');
    console.log("Admin access successful:", !!result);
    return !!result;
  } catch (error) {
    console.error("Admin access error:", error);
    return false;
  }
}