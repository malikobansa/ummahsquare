import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UmmahSquareLogo } from '@/components/icons';
import Image from 'next/image';

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
            {[...Array(6)].map((_, i) => (
                 <Card key={i} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <CardHeader className="p-0">
                   <Image
                     src={`https://picsum.photos/600/400?random=${14 + i}`}
                     alt="News article placeholder"
                     width={600}
                     height={400}
                     className="w-full h-48 object-cover"
                     data-ai-hint="news article"
                   />
                 </CardHeader>
                 <CardContent className="p-6">
                   <CardTitle className="mb-2 text-xl">Community Event Recap</CardTitle>
                   <p className="text-muted-foreground">
                     Read about our latest successful community gathering and see the highlights.
                   </p>
                 </CardContent>
               </Card>
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
