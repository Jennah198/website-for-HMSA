"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, FileText, Video } from "lucide-react"

const resources = {
  articles: [
    {
      title: "Understanding Islamic Principles",
      description: "A comprehensive guide to the fundamental principles of Islam.",
      icon: FileText,
    },
    {
      title: "Student Life Balance",
      description: "Tips for maintaining spiritual and academic balance.",
      icon: FileText,
    },
    {
      title: "Islamic Ethics in Modern World",
      description: "Exploring Islamic values in contemporary society.",
      icon: FileText,
    },
    {
      title: "Prayer and Meditation Guide",
      description: "Practical guide to Islamic prayer and spiritual practices.",
      icon: FileText,
    },
    {
      title: "Community Building in Islam",
      description: "The importance of community and brotherhood in Islamic teachings.",
      icon: FileText,
    },
  ],
  videos: [
    {
      title: "Prayer Tutorial Series",
      description: "Step-by-step guide to performing daily prayers.",
      icon: Video,
    },
    {
      title: "Islamic History",
      description: "Documentary series on Islamic civilization.",
      icon: Video,
    },
    {
      title: "Science in Islam",
      description: "Exploring the contributions of Muslim scientists.",
      icon: Video,
    },
    {
      title: "Youth Leadership in Islam",
      description: "Inspiring talks on leadership from Islamic perspective.",
      icon: Video,
    },
    {
      title: "Islamic Art and Culture",
      description: "Understanding Islamic artistic traditions and cultural heritage.",
      icon: Video,
    },
  ],
  books: [
    {
      title: "The Sealed Nectar",
      description: "Biography of Prophet Muhammad (peace be upon him).",
      icon: Book,
    },
    {
      title: "Gardens of the Righteous",
      description: "Collection of authentic hadith.",
      icon: Book,
    },
    {
      title: "The Holy Quran",
      description: "Complete Quran with translation and commentary.",
      icon: Book,
    },
    {
      title: "Islamic Jurisprudence",
      description: "Understanding Islamic law and its applications.",
      icon: Book,
    },
    {
      title: "Stories of the Prophets",
      description: "Inspiring stories from Islamic history.",
      icon: Book,
    },
  ],
}

export function ResourceLibrary() {
  return (
    <Tabs defaultValue="articles" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="articles">Articles</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
        <TabsTrigger value="books">Books</TabsTrigger>
      </TabsList>
      {(Object.keys(resources) as Array<keyof typeof resources>).map((category) => (
        <TabsContent key={category} value={category}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources[category].map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <resource.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="px-0">
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
