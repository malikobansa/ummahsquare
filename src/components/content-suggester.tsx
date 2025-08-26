"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Wand2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getSuggestions } from '@/app/actions';

const formSchema = z.object({
  theme: z.string().min(1, 'Please select a theme.'),
});

const themeOptions = [
    { value: 'Inspiration', label: 'Inspiration' },
    { value: 'Knowledge', label: 'Knowledge' },
    { value: 'Community', label: 'Community' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Travel', label: 'Travel & Culture' },
    { value: 'Health & Wellness', label: 'Health & Wellness' },
];

export function ContentSuggester() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions([]);
    const result = await getSuggestions(values.theme);
    setIsLoading(false);

    if (result.success && result.topics) {
      setSuggestions(result.topics);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'An unexpected error occurred.',
      });
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <Wand2 className="mx-auto h-12 w-12 text-accent mb-4" />
        <h2 className="text-4xl font-bold font-headline">AI-Powered Content Creation</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Never run out of ideas. Generate engaging post topics for any theme.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="theme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Weekly Theme</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a theme to get post ideas..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {themeOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" />
                      Suggest Topics
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {(isLoading || suggestions.length > 0) && (
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-center mb-4">Suggested Topics</h3>
                <Card className="bg-background/70">
                    <CardContent className="p-6">
                        {isLoading ? (
                            <div className="space-y-3">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                                        <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ul className="space-y-3">
                                {suggestions.map((topic, index) => (
                                <li key={index} className="flex items-start">
                                    <Sparkles className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                    <span>{topic}</span>
                                </li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </div>
        )}
      </div>
    </div>
  );
}
