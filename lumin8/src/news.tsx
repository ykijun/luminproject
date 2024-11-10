import Layout from "./layout"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function News() {
  const newsItems = [
    { id: 1, title: "New Research Grant Awarded", date: "2023-06-15", summary: "The university has been awarded a $2 million grant for AI research." },
    { id: 2, title: "Campus Sustainability Initiative", date: "2023-06-10", summary: "New solar panels to be installed on all major buildings." },
    { id: 3, title: "Alumni Spotlight: Tech Entrepreneur", date: "2023-06-05", summary: "Graduate founds successful startup, pledges support for student internships." },
  ]

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <div className="space-y-4">
        {newsItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
              <p>{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  )
}