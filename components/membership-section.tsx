import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const benefits = [
  "Access to all MSA events and programs",
  "Exclusive study circles and workshops",
  "Prayer room access",
  "Networking opportunities",
  "Leadership development",
  "Community service participation",
]

export function MembershipSection() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Membership Benefits</CardTitle>
        <CardDescription>Join our community and get access to exclusive benefits</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Become a Member</Button>
      </CardFooter>
    </Card>
  )
}
