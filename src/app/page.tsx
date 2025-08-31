import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Lightbulb,
  Users,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { ContentSuggester } from '@/components/content-suggester';
import { TiktokIcon, UmmahSquareLogo } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  { icon: Twitter, href: '#', name: 'X' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: TiktokIcon, href: '#', name: 'TikTok' },
  { icon: MessageCircle, href: '#', name: 'WhatsApp' },
];

const weeklyThemes = [
  {
    value: "faith",
    label: "Faith & Reflection",
    icon: Heart,
    description: "Share inspiring verses from the Qur'an, Hadith, and stories of the Prophets to strengthen our connection with Allah.",
    posts: [
      { title: "The Power of Dua", image: "https://picsum.photos/600/400?random=1", dataAiHint: "hands praying" },
      { title: "Lessons from Surah Yusuf", image: "https://picsum.photos/600/400?random=2", dataAiHint: "ancient quran" },
      { title: "A Hadith on Kindness", image: "https://picsum.photos/600/400?random=3", dataAiHint: "mosque interior" },
    ],
  },
  {
    value: "knowledge",
    label: "Knowledge & Learning",
    icon: Lightbulb,
    description: "Exchange knowledge on Islamic history, the contributions of Muslim scholars, and the beauty of Islamic arts.",
    posts: [
      { title: "Innovations from the Islamic Golden Age", image: "https://picsum.photos/600/400?random=4", dataAiHint: "astrolabe artifact" },
      { title: "The Mastery of Islamic Calligraphy", image: "https://picsum.photos/600/400?random=5", dataAiHint: "islamic calligraphy" },
      { title: "Principles of Islamic Finance", image: "https://picsum.photos/600/400?random=6", dataAiHint: "islamic architecture" },
    ],
  },
  {
    value: "community",
    label: "Community & Culture",
    icon: Users,
    description: "Showcasing the rich diversity of Muslim cultures, traditions, and community events from across the globe.",
    posts: [
      { title: "Eid Celebrations in Malaysia", image: "https://picsum.photos/600/400?random=7", dataAiHint: "malaysian mosque" },
      { title: "A Taste of a Ramadan Iftar", image: "https://picsum.photos/600/400?random=8", dataAiHint: "iftar meal" },
      { title: "Spotlight: A Muslim Philanthropist", image: "https://picsum.photos/600/400?random=9", dataAiHint: "community gathering" },
    ],
  },
];

const userStories = [
  { name: "Aisha, UK", story: "UmmahSquare connected me with a sister in my city for a study circle. It's a true blessing for finding community!", avatar: "https://picsum.photos/100/100?random=10", dataAiHint: "woman smiling" },
  { name: "Yusuf, Indonesia", story: "I found amazing resources for learning Arabic here. The 'Knowledge' section is a treasure trove.", avatar: "https://picsum.photos/100/100?random=11", dataAiHint: "man glasses" },
  { name: "Fatima, Canada", story: "As a halal business owner, the support from the UmmahSquare community has been incredible for my small venture.", avatar: "https://picsum.photos/100/100?random=12", dataAiHint: "woman entrepreneur" },
  { name: "Omar, USA", story: "The community initiatives on UmmahSquare inspired me to organize a charity drive at my local masjid. Masha'Allah!", avatar: "https://picsum.photos/100/100?random=13", dataAiHint: "man outdoors" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 py-8 text-center animate-in fade-in slide-in-from-top-8 duration-1000 ease-out">
        <Link href="/" className="inline-block">
          <div className="flex justify-center items-center gap-4">
            <UmmahSquareLogo className="h-16 w-16 text-primary" />
            <h1 className="text-5xl font-bold font-headline tracking-tight text-foreground">
              UmmahSquare
            </h1>
          </div>
        </Link>
        <p className="mt-4 text-xl text-muted-foreground">
          Connecting the Global Muslim Community
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
            <p className="mt-2 text-lg text-muted-foreground">Connect • Share • Grow</p>
          </div>
          <Tabs defaultValue="faith" className="w-full">
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
                    <Link key={post.title} href="/news" className="block">
                      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary h-full">
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
                    </Link>
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
            <h2 className="text-4xl font-bold font-headline">Stories from our Ummah</h2>
            <p className="mt-2 text-lg text-muted-foreground">Hear from our vibrant global community.</p>
          </div>
          <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {userStories.map((story, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Link href="/news" className="block h-full">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary">
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
                  </Link>
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
          <Link href="/" className="flex items-center gap-2">
            <UmmahSquareLogo className="h-8 w-8 text-primary" />
            <p className="font-semibold text-foreground">UmmahSquare</p>
          </Link>
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
