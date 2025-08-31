import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UmmahSquareLogo } from '@/components/icons';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

// In a real app, you'd fetch this data from a CMS or database.
const articles: { [key: string]: any } = {
  'community-event-recap': {
    title: 'Community Event Recap',
    image: 'https://picsum.photos/1200/600?random=14',
    dataAiHint: 'community gathering',
  },
  'quran-study-insights': {
    title: 'Quran Study Circle Insights',
    image: 'https://picsum.photos/1200/600?random=15',
    dataAiHint: 'people reading quran',
  },
  'volunteer-day-success': {
    title: 'Volunteer Day Success',
    image: 'https://picsum.photos/1200/600?random=16',
    dataAiHint: 'volunteers working',
  },
  'islamic-art-exhibition': {
    title: 'Islamic Art Exhibition',
    image: 'https://picsum.photos/1200/600?random=17',
    dataAiHint: 'islamic art',
  },
  'halal-food-festival': {
    title: 'Halal Food Festival Highlights',
    image: 'https://picsum.photos/1200/600?random=18',
    dataAiHint: 'halal food',
  },
  'youth-mentorship-program': {
    title: 'Youth Mentorship Program Launch',
    image: 'https://picsum.photos/1200/600?random=19',
    dataAiHint: 'mentor and mentee',
  },
};


export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = articles[params.slug] || { title: 'Article not found', image: 'https://picsum.photos/1200/600', dataAiHint: 'placeholder' };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="container mx-auto px-4 py-8 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-4">
                <UmmahSquareLogo className="h-12 w-12 text-primary" />
                <h1 className="text-3xl font-bold font-headline tracking-tight text-foreground">
                    UmmahSquare
                </h1>
                </Link>
                <Button asChild variant="outline">
                    <Link href="/news" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to News
                    </Link>
                </Button>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
                <article className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{article.title}</h1>
                    <p className="text-muted-foreground text-lg mb-8">Posted on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-lg object-cover mb-8"
                        data-ai-hint={article.dataAiHint}
                    />

                    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground text-lg leading-relaxed">
                        <p>
                            This is the beginning of the article content. In a real application, this text would be fetched from a Content Management System (CMS) or a database. It would contain the full story, details, and narrative for the news item.
                        </p>
                        <p>
                            For now, we are using placeholder text to demonstrate what a full article page would look like. You can imagine this space being filled with engaging paragraphs that elaborate on the title. For example, if the article is about a community event, this is where you would describe what happened, who was there, and what the outcomes were.
                        </p>
                        <p>
                            We could include quotes from participants:
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 italic">
                            "It was a wonderful experience that brought the community closer together. I can't wait for the next one!" - An attendee
                        </blockquote>
                        <p>
                            The article would continue, providing more details, context, and perhaps images or videos embedded within the content. The goal is to provide a rich, readable experience for the user, allowing them to fully engage with the news and updates from UmmahSquare.
                        </p>
                        <p>
                            Thank you for exploring this feature. You can now navigate back to the news page to select another article or return to the homepage.
                        </p>
                    </div>
                </article>
            </main>
            <footer className="bg-card border-t mt-16">
                <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} UmmahSquare. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
