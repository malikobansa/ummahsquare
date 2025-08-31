'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting post topics based on weekly themes.
 *
 * - suggestWeeklyPostTopics - A function that suggests post topics for a given theme.
 * - SuggestWeeklyPostTopicsInput - The input type for the suggestWeeklyPostTopics function.
 * - SuggestWeeklyPostTopicsOutput - The return type for the suggestWeeklyPostTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestWeeklyPostTopicsInputSchema = z.object({
  weeklyTheme: z.string().describe('The weekly theme for which to generate post topics.'),
});
export type SuggestWeeklyPostTopicsInput = z.infer<typeof SuggestWeeklyPostTopicsInputSchema>;

const SuggestWeeklyPostTopicsOutputSchema = z.object({
  postTopics: z.array(z.string()).describe('An array of suggested post topics for the weekly theme.'),
});
export type SuggestWeeklyPostTopicsOutput = z.infer<typeof SuggestWeeklyPostTopicsOutputSchema>;

export async function suggestWeeklyPostTopics(input: SuggestWeeklyPostTopicsInput): Promise<SuggestWeeklyPostTopicsOutput> {
  return suggestWeeklyPostTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestWeeklyPostTopicsPrompt',
  input: {schema: SuggestWeeklyPostTopicsInputSchema},
  output: {schema: SuggestWeeklyPostTopicsOutputSchema},
  prompt: `You are a social media manager for a social media platform for Muslims called UmmahSquare. Suggest 5 post topics based on the following weekly theme:\n\n{{weeklyTheme}}\n\nMake the topics engaging and relevant to a global Muslim community. Return the post topics as a JSON array of strings.`,
});

const suggestWeeklyPostTopicsFlow = ai.defineFlow(
  {
    name: 'suggestWeeklyPostTopicsFlow',
    inputSchema: SuggestWeeklyPostTopicsInputSchema,
    outputSchema: SuggestWeeklyPostTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
