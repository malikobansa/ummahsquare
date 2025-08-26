"use server";

import { suggestWeeklyPostTopics } from "@/ai/flows/suggest-weekly-post-topics";

export async function getSuggestions(theme: string): Promise<{
  success: boolean;
  topics?: string[];
  error?: string;
}> {
  try {
    if (!theme) {
        return { success: false, error: "Theme cannot be empty." };
    }
    const result = await suggestWeeklyPostTopics({ weeklyTheme: theme });
    return { success: true, topics: result.postTopics };
  } catch (error) {
    console.error("Error in getSuggestions action:", error);
    return { success: false, error: "Failed to generate suggestions. Please try again later." };
  }
}
