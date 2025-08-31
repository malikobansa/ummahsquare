import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UmmahSquareLogo } from '@/components/icons';
import Image from 'next/image';

const newsArticles = [
  {
    slug: 'community-event-recap',
    title: 'Community Event Recap',
    description: 'Read about our latest successful community gathering and see the highlights.',
    image: 'https://picsum.photos/600/400?random=14',
    dataAiHint: 'community gathering',
  },
  {
    slug: 'quran-study-insights',
    title: 'Quran Study Circle Insights',
    description: 'Discover the key takeaways from our weekly Quran study circle.',
    image: 'https://picsum.photos/600/400?random=15',
    dataAiHint: 'people reading quran',
  },
  {
    slug: 'volunteer-day-success',
    title: 'Volunteer Day Success',
    description: 'A look back at our impactful community volunteer day.',
    image: 'https://picsum.photos/600/400?random=16',
    dataAiHint: 'volunteers working',
  },
  {
    slug: 'islamic-art-exhibition',
    title: 'Islamic Art Exhibition',
    description: 'Explore the beauty and intricacy of Islamic art from our recent exhibition.',
    image: 'https://picsum.photos/600/400?random=17',
    dataAiHint: 'islamic art',
  },
  {
    slug: 'halal-food-festival',
    title: 'Halal Food Festival Highlights',
    description: 'A taste of the delicious and diverse foods from our annual festival.',
    image: 'https://picsum.photos/600/400?random=18',
    dataAiHint: 'halal food',
  },
  {
    slug: 'youth-mentorship-program',
    title: 'Youth Mentorship Program Launch',
    description: 'Introducing our new program to guide and inspire the next generation.',
    image: 'https://picsum.photos/600/400?random=19',
    dataAiHint: 'mentor and mentee',
  },
];


export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <UmmahSquareLogo className="h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold font-headline tracking-tight text-foreground">
            UmmahSquare
          </h1>
        </Link>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">News & Updates</h2>
            <p className="mt-2 text-lg text-muted-foreground">Latest happenings in the community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
                 <Link key={article.slug} href={`/news/${article.slug}`} className="block">
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border-2 border-transparent hover:border-primary">
                        <CardHeader className="p-0">
                        <Image
                            src={article.image}
                            alt={article.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            data-ai-hint={article.dataAiHint}
                        />
                        </CardHeader>
                        <CardContent className="p-6">
                        <CardTitle className="mb-2 text-xl">{article.title}</CardTitle>
                        <p className="text-muted-foreground">
                            {article.description}
                        </p>
                        </CardContent>
                    </Card>
                 </Link>
            ))}
        </div>
      </main>
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} UmmahSquare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
