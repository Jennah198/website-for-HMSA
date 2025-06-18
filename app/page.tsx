"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Users,
  Microscope,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { MembershipSection } from "@/components/membership-section"
import { ResourceLibrary } from "@/components/resource-library"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%2013-54-29%20hira%20report.pdf-9Q2kJqxD934d0zQvLt0jRp3mDGtkGd.png"
              alt="HMSA Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>
          <nav className="hidden md:flex md:gap-6">
            <Link className="text-sm font-medium hover:text-primary" href="#home">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#activities">
              Activities
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#resources">
              Resources
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#contact">
              Contact
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#membership">
              Membership
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%2013-54-29%20hira%20report.pdf-9Q2kJqxD934d0zQvLt0jRp3mDGtkGd.png"
              alt="HMSA Logo Background"
              fill
              className="opacity-10 blur-sm object-cover"
            />
          </div>
          <div className="container relative flex flex-col items-center gap-8 text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%2013-54-29%20hira%20report.pdf-9Q2kJqxD934d0zQvLt0jRp3mDGtkGd.png"
              alt="HMSA Logo"
              width={150}
              height={150}
              className="h-auto w-auto"
            />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Welcome to Hira Muslim Students Association
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Empowering students through education, leadership, and community service.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Us Today
            </Button>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
              <p className="text-muted-foreground md:text-lg">
                The Hira Muslim Students Association is dedicated to fostering a vibrant community of Muslim students.
                We provide a platform for spiritual growth, academic excellence, and meaningful connections.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%2013-54-29%20hira%20report.pdf-9Q2kJqxD934d0zQvLt0jRp3mDGtkGd.png"
                alt="HMSA Logo Large"
                width={300}
                height={300}
                className="h-auto w-64"
              />
            </div>
          </div>
        </section>

        <section id="activities" className="container py-12 md:py-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Our Activities</h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <GraduationCap className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Study circles, workshops, and academic support to enhance your educational journey.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop essential leadership skills through mentorship and practical experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building2 className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build lasting connections through social events and community service projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <GraduationCap className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>Graduation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Special programs for Grade 12 students including university preparation, scholarship guidance, and
                  career counseling to ensure successful transition to higher education.
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-4">
              <CardHeader>
                <Microscope className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>STEM Exhibition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Annual STEM exhibition showcasing innovative projects in chemistry, physics, engineering, and
                  technology. This platform empowers Muslim students to demonstrate their scientific achievements,
                  explore cutting-edge software applications, mechanical innovations, and connect with industry
                  professionals. The exhibition features interactive demonstrations, research presentations, and
                  networking opportunities to inspire the next generation of Muslim scientists and engineers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 bg-muted">
          <div className="mx-auto max-w-xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>

        <section id="resources" className="container py-12 md:py-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Resource Library</h2>
          <div className="mx-auto max-w-6xl">
            <ResourceLibrary />
          </div>
        </section>

        <section id="membership" className="py-12 md:py-24 bg-muted">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Become a Member</h2>
            <div className="mx-auto max-w-2xl">
              <MembershipSection />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">contact@hmsa.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+251 900004848</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <div className="grid gap-2">
                <Link className="text-sm hover:text-primary" href="#about">
                  About Us
                </Link>
                <Link className="text-sm hover:text-primary" href="#activities">
                  Activities
                </Link>
                <Link className="text-sm hover:text-primary" href="#membership">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="text-center">
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-4 justify-center">
                <Link href="https://facebook.com" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://instagram.com" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://t.me" className="hover:text-primary">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.48.236l.168-2.388L16.8 8.424c.204-.18-.048-.288-.312-.108l-5.592 3.528-2.4-.756c-.528-.168-.54-.528.108-.78l9.372-3.612c.432-.156.816.108.672.78z" />
                  </svg>
                  <span className="sr-only">Telegram</span>
                </Link>
                <Link href="https://linkedin.com" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://x.com" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">X (Twitter)</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hira Muslim Students Association. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
