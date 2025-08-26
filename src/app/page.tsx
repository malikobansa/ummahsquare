import Image from 'next/image';
import Link from 'next/link';
import {
  HeartHandshake,
  Lightbulb,
  Users,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle as WhatsappIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { ContentSuggester } from '@/components/content-suggester';
import { TiktokIcon, UmmahConnectLogo } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  { icon: Twitter, href: '#', name: 'X' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: TiktokIcon, href: '#', name: 'TikTok' },
  { icon: WhatsappIcon, href: '#', name: 'WhatsApp' },
];

const weeklyThemes = [
  {
    value: "motivation",
    label: "Motivation Mondays",
    icon: HeartHandshake,
    description: "Islamic quotes, reminders, and success stories to start the week with inspiration.",
    posts: [
      { title: "Reflections on Patience", image: "https://picsum.photos/600/400?random=1", dataAiHint: "islamic calligraphy" },
      { title: "The Story of an Ummahpreneur", image: "https://picsum.photos/600/400?random=2", dataAiHint: "muslim entrepreneur" },
      { title: "A Dua for Strength", image: "https://picsum.photos/600/400?random=3", dataAiHint: "hands praying" },
    ],
  },
  {
    value: "wisdom",
    label: "Wisdom Wednesdays",
    icon: Lightbulb,
    description: "Knowledge sharing, short lectures, and reflections on the Quran and Hadith.",
    posts: [
      { title: "Understanding Surah Al-Fatiha", image: "https://picsum.photos/600/400?random=4", dataAiHint: "quran book" },
      { title: "Lessons from the Seerah", image: "https://picsum.photos/600/400?random=5", dataAiHint: "prophets mosque" },
      { title: "The Science of Hadith", image: "https://picsum.photos/600/400?random=6", dataAiHint: "ancient scrolls" },
    ],
  },
  {
    value: "feature",
    label: "Feature Fridays",
    icon: Users,
    description: "Spotlighting community members, businesses, or important causes.",
    posts: [
      { title: "Community Spotlight: A Local Hero", image: "https://picsum.photos/600/400?random=7", dataAiHint: "community service" },
      { title: "Halal Business of the Week", image: "https://picsum.photos/600/400?random=8", dataAiHint: "small business" },
      { title: "Cause Spotlight: Water for All", image: "https://picsum.photos/600/400?random=9", dataAiHint: "charity work" },
    ],
  },
];

const userStories = [
  { name: "Aisha, UK", story: "UmmahSquare helped me connect with fellow designers for a collaborative art project celebrating Islamic heritage. It's a true blessing!", avatar: "https://picsum.photos/100/100?random=10", dataAiHint: "muslim woman" },
  { name: "Omar, USA", story: "Finding mentors in my field was tough until I joined the platform. The 'Wisdom Wednesdays' are my favorite source of knowledge.", avatar: "https://picsum.photos/100/100?random=11", dataAiHint: "muslim man" },
  { name: "Fatima, Malaysia", story: "As an entrepreneur, the support from the UmmahSquare community has been invaluable in growing my small business.", avatar: "https://picsum.photos/100/100?random=12", dataAiHint: "asian woman" },
  { name: "Yusuf, Nigeria", story: "The #4forTheUmmah challenges inspired me to start a local initiative for teaching kids coding. The power of community is real.", avatar: "https://picsum.photos/100/100?random=13", dataAiHint: "african man" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 py-8 text-center animate-in fade-in slide-in-from-top-8 duration-1000 ease-out">
        <div className="flex justify-center items-center gap-4">
          <UmmahConnectLogo className="h-16 w-16 text-primary" />
          <h1 className="text-5xl font-bold font-headline tracking-tight text-foreground">
            Ummah Connect
          </h1>
        </div>
        <p className="mt-4 text-xl text-muted-foreground">
          Connecting the Ummah in One Platform
        </p>
        <div className="mt-6 flex justify-center items-center gap-2">
          <Badge variant="secondary" className="text-sm">@ummahsquare</Badge>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section id="weekly-themes" className="container mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out delay-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">Weekly Themes</h2>
            <p className="mt-2 text-lg text-muted-foreground">Unity • Knowledge • Community • #4forTheUmmah</p>
          </div>
          <Tabs defaultValue="motivation" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
              {weeklyThemes.map((theme) => (
                <TabsTrigger key={theme.value} value={theme.value} className="py-3 flex-col h-auto gap-2">
                  <theme.icon className="h-6 w-6 text-accent" />
                  <span className="font-semibold text-base">{theme.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {weeklyThemes.map((theme) => (
              <TabsContent key={theme.value} value={theme.value} className="mt-8">
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">{theme.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {theme.posts.map((post) => (
                    <Card key={post.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary">
                      <CardHeader className="p-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                          data-ai-hint={post.dataAiHint}
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section id="ai-suggester" className="bg-card py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out delay-400">
          <ContentSuggester />
        </section>

        <section id="user-stories" className="container mx-auto px-4 py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out delay-600">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">Stories from the Ummah</h2>
            <p className="mt-2 text-lg text-muted-foreground">Hear from our vibrant community.</p>
          </div>
          <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {userStories.map((story, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between p-6 shadow-lg">
                      <CardContent className="p-0 flex-grow">
                        <blockquote className="text-base italic text-foreground">"{story.story}"</blockquote>
                      </CardContent>
                      <div className="mt-4 flex items-center gap-4">
                        <Image
                          src={story.avatar}
                          alt={story.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                          data-ai-hint={story.dataAiHint}
                        />
                        <p className="font-semibold text-primary">{story.name}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-2">
            <UmmahConnectLogo className="h-8 w-8 text-primary" />
            <p className="font-semibold text-foreground">Ummah Connect</p>
          </div>
          <div className="flex gap-4 my-4 md:my-0">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} UmmahSquare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
