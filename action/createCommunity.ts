"use server";

import { createSubreddit } from "@/sanity/lib/subreddit/createSubreddit";
import { getUser } from "@/sanity/lib/user/getUser";

export type ImageData = {
  base64: string;
  filename: string;
  contentType: string;
} | null;

export async function createCommunity(
  name: string,
  imageBase64: string | null | undefined,
  imageFilename: string | null | undefined,
  imageContentType: string | null | undefined,
  slug?: string,
  description?: string
) {
  try {
    console.log("Ghus gya");
    
    const user = await getUser();
    console.log(user, "User from createCommunity");
    
    if ("error" in user) {
      return { error: user.error };
    }

    // Prepare image data if provided
    let imageData: ImageData = null;
    if (imageBase64 && imageFilename && imageContentType) {
      imageData = {
        base64: imageBase64,
        filename: imageFilename,
        contentType: imageContentType,
      };
    }

    const result = await createSubreddit(
      name,
      user._id,
      imageData,
      slug,
      description
    );
    console.log(result, "Result from createSubreddit");
    
    return result;
  } catch (error) {
    console.log("Direct idhar");
    
    console.error("Error in createCommunity:", error);
    return { error: "Failed to create community" };
  }
}