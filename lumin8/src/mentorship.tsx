import Layout from "./layout"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Select } from "@/components/ui/select"

export default function Mentorship() {
  const mentors = [
    { id: 1, name: "Jane Doe", field: "Computer Science", experience: "5 years" },
    { id: 2, name: "John Smith", field: "Business Administration", experience: "8 years" },
    { id: 3, name: "Emily Brown", field: "Mechanical Engineering", experience: "3 years" },
  ]

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Mentorship Program</h1>
      <div className="mb-6 flex space-x-4">
        <Select>
          <option value="">Select a field</option>
          <option value="cs">Computer Science</option>
          <option value="business">Business</option>
          <option value="engineering">Engineering</option>
        </Select>
        <Button>Find a Mentor</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <Card key={mentor.id}>
            <CardHeader>
              <CardTitle>{mentor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Field: {mentor.field}</p>
              <p>Experience: {mentor.experience}</p>
            </CardContent>
            <CardFooter>
              <Button>Request Mentorship</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  )
}